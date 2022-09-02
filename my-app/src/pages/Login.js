import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
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
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Sign Up</h4>
          <div className='card-body'>
            {/* <form onSubmit={handleFormSubmit}> */}
            <input
                       className='form-input'
                       placeholder='First Name'
                       name='firstname'
                       type='firstname'
                       id='firstname'
              />
              <input
                       className='form-input'
                       placeholder='Last Name'
                       name='lastname'
                       type='lastname'
                       id='lastname'
              />
              
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                // value={formState.email}
                // onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Password'
                name='password'
                type='password'
                id='password'
                // value={formState.password}
                // onChange={handleChange}
              />
                <input
                className='form-input'
                placeholder='Phone'
                name='Phone'
                type='Phone'
                id='Phone'
              />
                    <input
                className='form-input'
                placeholder='Verify Password'
                name='verifypassword'
                type='verifypassword'
                id='verifypassword'
                // value={formState.password}
                // onChange={handleChange}
              />
                       <input
                className='form-input'
                placeholder='Address'
                name='Address'
                type='Address'
                id='Address'
                // value={formState.password}
                // onChange={handleChange}
              />
                        <input
                className='form-input'
                placeholder='City'
                name='City'
                type='City'
                id='City'
                // value={formState.password}
                // onChange={handleChange}
              />
                        <input
                className='form-input'
                placeholder='State'
                name='State'
                type='State'
                id='State'
                // value={formState.password}
                // onChange={handleChange}
              />
                        <input
                className='form-input'
                placeholder='zipcode'
                name='zipcode'
                type='zipcode'
                id='zipcode'
                // value={formState.password}
                // onChange={handleChange}
              />
              <h1 className="text-white">Emergency Contact</h1>
                        <input
                className='form-input'
                placeholder='First Name'
                name='emergencyfirstName'
                type='emergencyfirstName'
                id='emergencyfirstName'
                // value={formState.password}
                // onChange={handleChange}
              />
                        <input
                className='form-input'
                placeholder='Last Name'
                name='emergencylast'
                type='emergencylast'
                id='emergencylast'
                // value={formState.password}
                // onChange={handleChange}
              />
                        <input
                className='form-input'
                placeholder='Phone'
                name='phone'
                type='phone'
                id='phone'
                // value={formState.password}
                // onChange={handleChange}
              />
              <button className='btn d-block w-100 text-white' type='submit'>
                Sign Up
              </button>
            {/* </form> */}
            {/* {error && <div>Login failed</div>} */}
          </div>
        </div>
      </div>
      <br></br>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Login</h4>
          <div className='card-body'>
            {/* <form onSubmit={handleFormSubmit}> */}
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                // value={formState.email}
                // onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                // value={formState.password}
                // onChange={handleChange}
              />
              <button className='btn d-block w-100 text-white' type='submit'>
                Login
              </button>
            {/* </form> */}
            {/* {error && <div>Login failed</div>} */}
          </div>
        </div>
      </div>

    </main>
  );
};

export default Login;
