import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import image from '../../../images/login.png'

const Register = () => {

  const [loginData, setLoginData] = useState({})

  const { createUser, setError, error } = useAuth()

  const location = useLocation()
  const history = useHistory()

  const getInputData = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loginData }
    newData[field] = value;
    setLoginData(newData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (loginData?.password !== loginData?.conpass) {
      setError('Passwords are not matching')
      return
    }
    createUser(loginData?.email, loginData?.password, loginData?.name, location, history)

    e.target.reset()
  }

  return (
    <div className='pt-28 pb-12'>
      <div className="login">
        <div className="small-container">
          <div className="grid grid-cols-2">
            <div>
              <img className='w-3/4' src={image} alt="" />
            </div>
            <div className='flex flex-col justify-center bg-light items-center'>
              <h1 className='text-2xl font-semibold mb-3 text-blue'>Registration Form</h1>
              <form onSubmit={handleSubmit} className='w-5/6'>
                <div>
                  <input onBlur={getInputData} name='name' className='py-2.5 px-3 bg-seconDary_bg my-2 w-full  outline-none' type="text" placeholder='Your Name' />
                  <input onBlur={getInputData} name='email' className='py-2.5 px-3 bg-seconDary_bg my-2 w-full  outline-none' type="email" placeholder='Email' />
                  <input onBlur={getInputData} name='password' className='py-2.5 px-3 bg-seconDary_bg my-2 w-full  outline-none' type="password" placeholder='Password' />
                  <input onBlur={getInputData} name='conpass' className='py-2.5 px-3 bg-seconDary_bg my-2 w-full  outline-none' type="password" placeholder='Confirm Password' />
                  <input className='px-4 rounded-sm primaryBtn text-white font-semibold py-2 mt-2 bg-primary_bg' type="submit" value='Register' />
                </div>
              </form>
              <p className='mt-4'>Already have an account? <Link className='text-blue' to='/login'>Register</Link></p>
              {
                error && <div className="alert alert-danger mt-3" role="alert">
                  {error}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;