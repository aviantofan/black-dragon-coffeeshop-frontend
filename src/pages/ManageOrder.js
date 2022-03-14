import React from 'react';
import '../assets/scss/manageorder.scss';
import defaultImage from '../assets/images/default-image.jpg';

export default function ManageOrder () {
  return (
    <section className='manage-order'>
      <div className='opacity'>
        <div className='container'>
          <h2 className='text-white'>Finish your <br/>customer order now.</h2>
          <div className='row'>
            <div className='col-12 col-lg-6'>
              <div className='card bg-white px-5'>
                <div className='my-5 text-center'>
                  <h3 className='fw-bold'>Delivery Order</h3>
                  <div>for Zulaikha</div>
                </div>
                {[...Array(2)].map((data, idx) => <div key={idx} className='mt-3 d-flex flex-row justify-content-between align-items-center'>
                  <div className='d-flex flex-row'>
                    <div className='img-product' style={{ backgroundImage: `url(${defaultImage})` }}></div>
                    <div className='ms-2 ms-lg-4'>
                      <div>Hazelnut Latte</div>
                      <div>X 1</div>
                      <div>Regular</div>
                    </div>
                  </div>
                  <div>IDR 24.0</div>
                </div>)}
                <hr className='my-4' />
                <div className='row'>
                  <div className='col-6'>
                    <div>SUBTOTAL</div>
                    <div>TAX & FEES</div>
                    <div>SHIPPING</div>
                  </div>
                  <div className='col-6 text-end'>
                    <div>IDR 121.000</div>
                    <div>IDR 20.000</div>
                    <div>IDR 10.000</div>
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
