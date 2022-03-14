// import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import Profile from '../assets/img/profile-picture.png';
import Layout from '../layouts/Layout';
import Button from '../components/BDButton';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logout } from '../redux/actions/auth';

const profilePage = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);

  useEffect(() => {
    console.log('auth', auth);
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem('user');
    dispatch(logout());
  };

  return (
    <>
    <Layout>
      <header className='profile'>
        <div className='profileContent'>
          <div className='container'>
            <h1 className='heading pt-5'>User Profile</h1>
            <div className="row profilePage">
              <div className="col-4">
                <section className="profilePage">
                  <form>
                    <div className="text-center">
                      <div className="d-inline-block profile-pic">
                        <img src={Profile} className="img-rounded-circle mt-4 img-fluid" alt="profile-pic" />
                      </div>
                    </div>
                    <div className="profileName text-center">
                      <h2 className="username">Zulaikha</h2>
                    </div>
                    <div className="profileDesc text-center">
                      <p>zulaikha17@gmail.com</p>
                    </div>
                    <div className='row mb-2'>
                      <div className='col-12 justify-content-center'>
                        <div className='text-center'>
                          <Button className='btn btn-primary w-75'>Choose photo</Button>
                        </div>
                      </div>
                    </div>
                    <div className='row mb-4'>
                      <div className='col-12 justify-content-center'>
                        <div className='text-center'>
                          <Button className='btn btn-secondary w-75'>Remove photo</Button>
                        </div>
                      </div>
                    </div>
                    <div className='row mb-4'>
                      <div className='col-12 justify-content-center'>
                        <div className='text-center'>
                          <Button className='btn btn-secondary w-75'>Edit Password</Button>
                        </div>
                      </div>
                    </div>
                    <div className='row justify-content-center mb-4'>
                      <div className='col-10 justify-content-center'>
                        <div className='text-center'>
                          <h3 className='profileDesc'>Do you want to save the change?</h3>
                        </div>
                      </div>
                    </div>
                    <div className='row mb-2'>
                      <div className='col-12 justify-content-center'>
                        <div className='text-center'>
                          <Button className='btn btn-primary w-75'>Save Change</Button>
                        </div>
                      </div>
                    </div>
                    <div className='row mb-4'>
                      <div className='col-12 justify-content-center'>
                        <div className='text-center'>
                          <Button className='btn btn-secondary w-75'>Cancel</Button>
                        </div>
                      </div>
                    </div>
                    <div className='row mb-4'>
                      <div className='col-12 justify-content-center'>
                        <div className='text-center'>
                          <Button onClick={logOutHandler} className='btn btn-primary w-75'>Logout</Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </section>
              </div>
              <div className="col mx-3">
                <section className='profileContact'>
                  <div className='row contact mt-4'>
                    <div className='row mb-4 mt-3'>
                      <div className='col'>
                        <h2>Contact</h2>
                      </div>
                      <div className='col text-end '>
                        <Button className="editContact mt-1"><FaPencilAlt /></Button>
                      </div>
                    </div>
                    <section className="contact">
                      <div className="row mb-3">
                        <div className="col">
                          <label className="mb-2">Email address: </label>
                          <input className="d-block w-100 input-underline" type="text" value="zulaikha17@gmail.com" />
                        </div>
                        <div className="col">
                          <label className="mb-2">Mobile number: </label>
                          <input className="d-block w-100 input-underline" type="text" value="(+62)813456782" />
                        </div>
                      </div>
                    </section>
                    <section className="address">
                      <div className='row mb-5'>
                        <div className="col-6 mb-3">
                          <label className="mb-2">Delvery address: </label>
                          <textarea className="d-block w-100 input-underline">Iskandar Street no. 67 Block A Near Bus Stop</textarea>
                        </div>
                      </div>
                    </section>
                    <div className='row mb-4'>
                      <div className='col'>
                        <h2 className='mt-2'>Details</h2>
                      </div>
                    </div>
                    <section className="details">
                      <div className="row mb-3">
                        <div className="col">
                          <label className="mb-2">Display name: </label>
                          <input className="d-block w-100 input-underline" type="text" value="Zulaikha" />
                        </div>
                        <div className="col">
                          <label className="mb-2">DD/MM/YY: </label>
                          <input className="d-block w-100 input-underline" type="text" value="03/04/90" />
                        </div>
                      </div>
                      <div className='row mb-3'>
                        <div className="col-6 mb-3">
                          <label className="mb-2">First name: </label>
                          <input className="d-block w-100 input-underline" type="text" value="Zulaikha" />
                        </div>
                      </div>
                      <div className='row mb-4'>
                        <div className="col-6 mb-3">
                          <label className="mb-2">Last name: </label>
                          <input className="d-block w-100 input-underline" type="text" value="Nirmala" />
                        </div>
                      </div>
                    </section>
                    <section className="profileEdit">
                      <div className="d-flex justify-content-center mb-4">
                        <div className="me-5">
                          <label className="radio-button">
                            <input type="radio" name="gender" />
                            <div className="checkmark"></div>
                            <div className="text">Male</div>
                          </label>
                        </div>
                        <div>
                          <label className="radio-button">
                            <input type="radio" name="gender" />
                            <div className="checkmark"></div>
                            <div className="text">Female</div>
                          </label>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </header>
      </Layout>
      </>
  );
};

export default profilePage;
