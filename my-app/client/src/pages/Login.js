import { useState } from "react"
import Cookie from "js-cookie"
import { Alert, Button, Container, Form } from 'react-bootstrap'

const Login = (props) => {
    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
   
    // Handling the name change
    const handleName = (e) => {
      setName(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the email change
    const handleEmail = (e) => {
      setEmail(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the password change
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name === '' || email === '' || password === '') {
        setError(true);
      } else {
        setSubmitted(true);
        setError(false);
      }
    };
   
    // Showing success message
    const successMessage = () => {
      return (
        <div
          className="success"
          style={{
            display: submitted ? '' : 'none',
          }}>
          <h1 className="text-primary">User {name} successfully registered!!</h1>
        </div>
      );
    };
   
    // Showing error message if error is true
    const errorMessage = () => {
      return (
        <div
          className="error"
          style={{
            display: error ? '' : 'none',
          }}>
          <h1 className="text-primary">Please enter all the fields</h1>
        </div>
      );
    };

    const style = {
      display:"flex",
      justifyContent: "center",
    }
   
    return (
      <div style={style}>

      <div className="form text-white">
        <div>
          <h1>User Registration</h1>
        </div>
   
        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <form>
          {/* Labels and inputs for form data */}
          <label className="label">Name</label>
          <input onChange={handleName} className="input d-block text-white"
            value={name} type="text" />
   
          <label className="label">Email</label>
          <input onChange={handleEmail} className="input d-block text-white"
            value={email} type="email" />
   
          <label className="label">Password</label>
          <input onChange={handlePassword} className="input d-block text-white"
            value={password} type="password" />
   <br></br>
          <button onClick={handleSubmit} className="btn bg-primary text-white" type="submit">
            Submit
          </button>
        </form>
      </div>
            </div>
    );
  }

export default Login;