import React, { useState } from 'react';
import Text from "react-bootstrap/Container"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import route from 'react-bootstrap'
import Home from './Home'
import ClassRoom from './Classroom';
import profileImage from '../images/profilePic.jpg'
import Login from './Login';

function Profile() {


  return (
    <section>
      <header className="flex-row px-1">
        <Route path="/" component={Home} />Home
        <Route path="/classroom" component={ClassRoom} />ClassRoom
      </header>
      <div>
        <img src = {profileImage} alt = 'Profile' />
        <Text>Example</Text>
      </div>
      <div className='flex-row px-1'>
        <Text>Notifications</Text>
        <input type = 'checkbox' data-focusable='true'></input>
      </div>
      <div>
      <Text>Example</Text>
      </div>
      <div>
        <button className='btn d-block w-100 text-white'
          //onClick={kidProfile}
        ></button>
      </div>
      <div className="flex-row px-1">
         <button>
          Edit Profile
          <Route path="/Login" component={Login} />
        </button>
        <button>
        Edit Children
        <Route path="/" />
        </button>
      </div>
    </section>
  )
}

export default Profile;