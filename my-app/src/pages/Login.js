import { useState } from "react"
import Cookie from "js-cookie"
import { Alert, Button, Container, Form } from 'react-bootstrap'

const Login = (props) => {
  const [ name, setName, setLastName, setEmail] = useState("");
  const [ loginCreds, setLoginCreds ] = useState({ email: "", password: "" })
  const [ formMessage, setFormMessage ] = useState({ type: "", msg: "" })
  const handleLogin = async (e) => {
    e.preventDefault()
    setFormMessage({ type: "", msg: "" })
    const authCheck = await fetch("/utils/auth.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginCreds)
    })
    const authResult = await authCheck.json()

    // If the login was good, save the returned token as a cookie
    if( authResult.result === "success" ){
      Cookie.set("auth-token", authResult.token)
      setFormMessage({ type: "success", msg: "Your login was successful. Proceed!" })
    } else {
      setFormMessage({ type: "danger", msg: "We could not log you in with the credentials provided." })
    }
    setLoginCreds()
  }
  //   const [formState, setFormState] = useState({ email: '', password: '' });
  //   const [login, { error }] = useMutation(LOGIN_USER);
  //   // update state based on form input changes
  //   const handleChange = (event) => {
  //     const { name, value } = event.target;

  //     setFormState({
  //       ...formState,
  //       [name]: value,
  //     });
  //   };
  //  //submit form
  //  const handleFormSubmit = async event => {
  //     event.preventDefault();

  //     try {
  //         const { data } = await login({
  //             variables: { ...formState }
  //         });

  //         Auth.login(data.login.token);
  //     } catch (e) {
  //         console.error(e);
  //     }
  //  };
  return (
    <Form onSubmit= {handleLogin}>
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Sign Up</h4>
          <div className="card-body">
            {/* <form onSubmit={handleFormSubmit}> */}
            <input
              className="form-input text-white"
              placeholder="First Name"
              name="firstname"
              type="firstname"
              id="firstname"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="form-input text-white"
              placeholder="Last Name"
              name="lastname"
              type="lastname"
              id="lastname"
              onChange= {(e) => setLastName(e.target.value)}
            />

            <input
              className="form-input text-white"
              placeholder="Your email"
              name="email"
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              // value={formState.email}
              // onChange={handleChange}
            />
            <input
              className="form-input text-white"
              placeholder="Password"
              name="password"
              type="password"
              id="password"
              onChange={(e) => setEmail(e.target.value)}
              // value={formState.password}
              // onChange={handleChange}
            />
            <input
              className="form-input text-white"
              placeholder="Phone"
              name="Phone"
              type="Phone"
              id="Phone"
            />
            <input
              className="form-input text-white"
              placeholder="Verify Password"
              name="verifypassword"
              type="verifypassword"
              id="verifypassword"
              // value={formState.password}
              // onChange={handleChange}
            />
            <input
              className="form-input text-white"
              placeholder="Address"
              name="Address"
              type="Address"
              id="Address"
              // value={formState.password}
              // onChange={handleChange}
            />
            <input
              className="form-input text-white"
              placeholder="City"
              name="City"
              type="City"
              id="City"
              // value={formState.password}
              // onChange={handleChange}
            />
            <input
              className="form-input text-white"
              placeholder="State"
              name="State"
              type="State"
              id="State"
              // value={formState.password}
              // onChange={handleChange}
            />
            <input
              className="form-input text-white"
              placeholder="Zipcode"
              name="zipcode"
              type="zipcode"
              id="zipcode"
              // value={formState.password}
              // onChange={handleChange}
            />
            <h1 className="text-white">Emergency Contact</h1>
            <input
              className="form-input text-white"
              placeholder="First Name"
              name="emergencyfirstName"
              type="emergencyfirstName"
              id="emergencyfirstName"
              // value={formState.password}
              // onChange={handleChange}
            />
            <input
              className="form-input text-white"
              placeholder="Last Name"
              name="emergencylast"
              type="emergencylast"
              id="emergencylast"
              // value={formState.password}
              // onChange={handleChange}
            />
            <input
              className="form-input text-white"
              placeholder="Phone"
              name="phone"
              type="phone"
              id="phone"
              // value={formState.password}
              // onChange={handleChange}
            />
            <button className="btn d-block w-100 text-white" type="submit">
              Sign Up
            </button>
            {/* </form> */}
            {/* {error && <div>Login failed</div>} */}
          </div>
        </div>
      </div>
      <br></br>
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Login</h4>
          <div className="card-body">
            {/* <form onSubmit={handleFormSubmit}> */}
            <input
              className="form-input text-white"
              placeholder="Your email"
              name="email"
              type="email"
              id="email"
              // value={formState.email}
              // onChange={handleChange}
            />
            <input
              className="form-input text-white"
              placeholder="******"
              name="password"
              type="password"
              id="password"
              // value={formState.password}
              // onChange={handleChange}
            />
            <button className="btn d-block w-100 text-white" type="submit">
              Login
            </button>
            
            {/* </form> */}
            {/* {error && <div>Login failed</div>} */}
          </div>
        </div>
      </div>
    </main>

</Form>
  );
};

export default Login;