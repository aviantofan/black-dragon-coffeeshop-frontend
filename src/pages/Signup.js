import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/style.css'
import logo from '../assets/images/logo.png'
import Button from '../components/Button'

const Signup = () => {
  return (
    <div className='login-page'>
      <section>
        <div className='row'>
          <div className='col-12 col-lg-6 background-section'></div>
          <div className='col-12 col-lg-6 px-5 top-section'>
            <div className='my-5 d-flex flex-row justify-content-between'>
              <div className='logo'>
                <img src={logo} alt='logo' /> 
              </div>
              <Button className='px-5'>Sign Up</Button>  
            </div>
            <div className='text-center'>
              <h2 className='text-secondary text-center my-5'>Login</h2>
              <form className='d-flex flex-column align-items-center'>
                <div className='text-start input-section'>
                  <label className='fw-bold pb-2'>Email Adress:</label>
                  <div>
                    <input placeholder='Enter your email adress' />
                  </div>
                </div>
                <div className='text-start input-section mt-5'>
                  <label className='fw-bold pb-2'>Password:</label>
                  <div>
                    <input placeholder='Enter your password' />
                  </div>
                </div>
                <div className='text-start input-section mt-5'>
                  <label className='fw-bold pb-2'>Phone Number:</label>
                  <div>
                    <input placeholder='Enter your phone number' />
                  </div>
                </div>
                <div className='text-start input-section my-3'>
                  <a href='#'>Forgot Password?</a>
                </div>
                <button className='btn btn-primary btn-full my-3'>Login</button>
                <button className='btn btn-secondary btn-full'>Login With Google</button>
                {/* <Button className='' >Login</Button>
                <Button className=''>Login with Google</Button> */}
              </form>
            </div>
            
          </div>
          
        </div>
        <div className='badge w-75 mx-auto d-flex justify-content-center bg-white position-relative'>
          <div className='d-flex justify-content-between align-items-center w-100 card-bottom '>
            <div className='text-start'>
              <h2 >Get your member <br/> card now!</h2>
              <p className='text-muted'>Let's join with our member and enjoy the deals.</p> 
            </div>
            <div className='text-end'>
              <button className='btn btn-primary px-5 py-3'>Create Now</button>  
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup
