const User = require("../models/User")
const jwt = require("jsonwebtoken")
const cookie = require("cookie")
const bcrypt = require("bcrypt")
const connection = require("../config/connection")
const { signToken, decodeToken, authMiddleware } = require('../utils/auth');
const { request } = require("express")


const createUser = async ({ body }, res) => {
  await User.create(body)
    .then(dbUsersData => res.json(dbUsersData))
    .catch(err => res.status(400).json({ message: 'Unable to create user' }));
}

// get all users
const getAllUsers = async (req, res) => {
  console.log('getAllUsers Route called')
  try {
    const getAllQuery = await User.find({});
    res.status(200).json({ result: "success", payload: getAllQuery });
  } catch (err) {
    res.status(400).json({ message: 'No users found' });
  }
}

// get user by ID
const getUserById = async (req, res) => {
  try {
    const getByIdQuery = await User.findById(req.params.id)
    res.status(200).json({ result: "success", payload: getByIdQuery })
  } catch (err) {
    res.status(400).json({ result: "fail", message: 'No user found by that id' })
  }
}

// login user
const authenticateLogin = async (req, res) => {
  console.log("entering login controller")

  // First see if we have a user with the supplied email address 
  console.log("email: ", req.body.email)  // am i sending a valid email for logginin?
  const foundUser = await User.findOne({ email: req.body.email })
  if (!foundUser) return res.status(401).json({ message: "Login failed - 1." })

  // Now compare the supplied password w/ the hashed password
  const isValid = await bcrypt.compare(req.body.password, foundUser.password)
  if (!isValid) return res.status(401).json({ message: "Login failed." })
  console.log("password verified")

  // If we have a match, we will send back a token (follwoing lineextracts the password key from the foundUser object)
  const { password, ...modifiedUser } = foundUser


  // Create a token to represent the authenticated user
  console.log("sending to signToken")
  const token = signToken(foundUser)

  res
    .status(200)
    .set({ "auth-token": token })
    .json({ result: "success", user: modifiedUser, token: token })
}

const lookupUserByToken = async ({ headers }, res) => {
  console.log("Route: in controller: lookupUserByToken")
  console.log("Token: ", headers.token)

  // if( !req.headers || !req.headers.cookie ) return res.status(401).json({msg: "un-authorized - 1"})
  if (!headers.token) return res.status(401).json({ msg: "un-authorized - missing or expired token in req header" })

  const user = decodeToken(headers.token)
  console.log("{ user }: ", user)
  if (user.result === "error") {
    return res.status(200).json({ result: user.result, errName: user.name, errMsg: user.message })

  } else {
    return res.status(200).json({ result: user.result, _id: user._id, email: user.email, user_name: user.user_name })
  }

}

const followUser = async (req, res) => {
  const data = authMiddleware(req).user

  if (!data) {
    return res.status(401).json({ message: "Login failed." })
  }

  User.findById(req.params.id)
    .then((followerData) => {
      User.findOneAndUpdate(
        { _id: data._id },
        { $addToSet: { following: followerData } },
        { new: true, runValidators: true }
      )
        .then((followingData) => {
          res.status(200).json(followingData)
        })
        .catch((err) => {
          console.log(err)
          res.status(400).json({ result: "fail", message: 'No user found by that id' })
        })
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json({ result: "fail", message: 'No user found by that id' })
    })
}

const getFollowing = async (req, res) => {
  const data = authMiddleware(req).user

  if (!data) {
    return res.status(401).json({ message: "Login failed." })
  }

  User.findById(data._id).populate('following')
    .then(userData => {
      res.status(200).json({
        following: userData.following
      })
    })
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  authenticateLogin,
  lookupUserByToken,
  followUser,
  getFollowing
}