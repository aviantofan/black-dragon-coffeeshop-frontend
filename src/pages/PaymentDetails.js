// import React from 'react';
import Layout from '../layouts/Layout';
import '../assets/scss/paymentdetail.scss';
import imgProduct from '../assets/images/product.jpg';

export default function PaymentDetails () {
  return (
    <Layout>
      <section className='payment-detail'>
        <div className='opacity'>
          <div className='container'>
            <h1 className='text-white mb-5'>Checkout your <br/> item now!</h1>
            <div className='row mb-5'>
              <div className='col-12 col-md-6 card-left'>
                <div className='card bg-white px-5 py-4'>
                  <h2 className='text-center py-lg-5'>Order Summary</h2>
                  {[...Array(2)].map((data, index) => {
                    return <div key={index} className='d-flex my-2 flex-row align-items-center justify-content-between'>
                      <div className='d-flex flex-row'>
                        <div className='img-product' style={{ backgroundImage: `url(${imgProduct})` }}></div>
                        <div className='d-flex flex-column ps-3'>
                          <span>Hazelnut Latte</span>
                          <span>x 1</span>
                          <span>Regular</span>
                        </div>
                      </div>
                      <div>IDR 24.0</div>
                    </div>;
                  })}
                  <hr/>
                  <div className='d-flex justify-content-between'>
                    <span>SUBTOTAL</span>
                    <span>IDR 120.000</span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <span>TAX & FEES</span>
                    <span>IDR 120.000</span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <span>SHIPPING</span>
                    <span>IDR 120.000</span>
                  </div>
                  <div className='fw-bold my-3 my-lg-5 fs-4 d-flex justify-content-between'>
                    <span>TOTAL</span>
                    <span>IDR 150.000</span>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-6 card-right'>
                <div className='d-flex justify-content-between text-white mb-3 fs-3 fw-bold'>
                  <span>Address details</span>
                  <span>edit</span>
                </div>
                <div className='card bg-white px-5 py-4'>
                  <div><span className='fw-bold'>Delivery</span> to Iskandar Street</div>
                  <hr/>
                  <div className='adress'>Km 5 refinery road oppsite republic road, effurun, Jakarta</div>
                  <hr/>
                  <div>+62 81348287878</div>
                </div>
                <div className='text-white mt-5 mb-3 fs-3 fw-bold'>
                  <span>Payment Methods</span>
                </div>
                <div className='card bg-white px-5 py-4'>
                  <form>
                    <input type='radio' className='form-check-input' id='card' value='card' />
                    {/* <label for='card'>Card</label> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
