// import React from 'react';
import Layout from '../layouts/Layout';

const forgotPage = () => {
  return (
    <>
    <Layout useNavbar={false}>
      <body>
        <header className="header-forgot">
          <div className="header-content">
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='row'>
                  <div className='col'>
                    <h1 className='heading'>Forgot your password?</h1>
                    <h3 className="heading">Don’t worry, we got your back!</h3>
                    <form>
                      <div className='row justify-content-center'>
                        <div className='col-md-6 mb-3'>
                          <input placeholder="Enter your email address to get code" name='email' type="email" className="forgotemail w-100 text-start" />
                        </div>
                        <div className='col-md-2 mb-3'>
                        <button className="btn btn-primary send w-100">Send</button>
                        </div>
                      </div>
                      <div className='row justify-content-center mt-5'>
                        <div className='col'>
                          <p className="text">
                          Click here if you didn’t receive any link <br/> in 2 minutes
                          </p>
                        </div>
                      </div>
                      <div className='row justify-content-center'>
                        <div className='col-md-3'>
                          <button className="btn btn-primary send w-100">Resend Code</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </body>
    </Layout>
    </>
  );
};

export default forgotPage;
