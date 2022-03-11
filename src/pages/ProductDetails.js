// import React from 'react';
import Layout from '../layouts/Layout';
import { GrFormNext } from 'react-icons/gr';
import productImage from '../assets/img/product-img.png';
import '../assets/css/product-details.css';
import { FiTrash2 } from 'react-icons/fi';

export default function ProductDetails () {
  return (
    <Layout useNavbar>
      <div className='product-details container'>
        <div className='route'>
          <a href='#'>Favorite & Promo</a>
            <GrFormNext />
          <a href='#' className='fw-bold text-dark'>Cold Brew</a>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <div className='text-center my-5'>
              <div className='d-inline-block position-relative'>
                <div className='img-product' style={{ backgroundImage: `url(${productImage})` }}></div>
                <FiTrash2 className='trash bg-secondary p-2' />
              </div>
            </div>
            <div className='delivery-card p-4'>
              <h4 className='fw-bold mb-3'>Delivery and Time</h4>
              <div className='d-flex flex-row mt-lg-4 delivery-choice'>
                <button className='btn btn-secondary py-2 px-5 px-lg-3 fs-5'>Dine in</button>
                <button className='btn btn-primary py-2 px-lg-5 px-lg-3 fs-5 door'>Door Delivery</button>
                <button className='btn btn-primary py-2 px-5 px-lg-3 fs-5'>Pick Up</button>
              </div>
              <div className='row my-lg-4'>
                <div className='col-3 d-flex align-items-center'>
                  <div>Now</div>
                </div>
                <div className='col-9'>
                  <div className='my-3 now-btn'>
                    <button className='btn btn-secondary py-2 px-4 me-3 fs-5 yes'>Yes</button>
                    <button className='btn btn-primary py-2 px-4 fs-5'>No</button>
                  </div>
                </div>
              </div>
              <div className='row mb-lg-4'>
                <div className='col-3 d-flex align-items-center'>
                  <div>Set time</div>
                </div>
                <div className='col-9'>
                  <form>
                    <input type='text' className='bg-primary time-input ps-3' placeholder='Enter for time reservation' />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6 mt-5 ps-lg-5 right-side'>
            <h2 className='fs-1 text-center'>Cold Brew</h2>
            <p className='pt-5 fs-5'>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
            <div>
              Delivery only on <span className='fw-bold text-secondary'>Monday to</span> <br/>
              <span className='fw-bold text-secondary'>Friday</span> at <span className='fw-bold text-secondary'>1-7pm</span>
            </div>
            <div className='d-flex justify-content-between mt-5 mb-3'>
              <div className='counter d-flex flex-row'>
                <button className='btn border fw-bold decrement'>-</button>
                <span className='count border fw-bold px-4 py-2'>2</span>
                <button className='btn border fw-bold increment'>+</button>
              </div>
              <h3 className='price fw-bold'>IDR 30.000</h3>
            </div>
            <button className='py-4 btn btn-primary w-100 mt-5'>Add to Cart</button>
            <button className='py-4 btn btn-secondary w-100 mt-4'>Ask to Staff</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
