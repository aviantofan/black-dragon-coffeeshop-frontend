// import React from 'react';
import Layout from '../layouts/Layout';
import { GrFormNext } from 'react-icons/gr';
import '../assets/css/product-details.css';
import { FiTrash2 } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../redux/actions/products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultImage from '../assets/images/default-image.jpg';
import { getDeliveryMethods } from '../redux/actions/deliveryMethods';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function ProductDetails () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, deliveryMethods } = useSelector(state => state);

  useEffect(() => {
    dispatch(getProductDetail(id));
    dispatch(getDeliveryMethods());
  }, [dispatch]);

  const { name, price } = productDetail.results;

  return (
    <Layout useNavbar>
      <div className='product-details container'>
        <div className='route'>
          <a href='#'>Favorite & Promo</a>
            <GrFormNext />
          <a href='#' className='fw-bold text-dark'>{name}</a>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <div className='text-center my-5'>
              <div className='d-inline-block position-relative'>
                <div className='img-product' style={{ backgroundImage: `url(${defaultImage})` }}></div>
                <FiTrash2 className='trash bg-secondary p-2' />
              </div>
            </div>
            <div className='delivery-card p-4'>
              <h4 className='fw-bold mb-3'>Delivery and Time</h4>
              <div className='d-flex flex-row justify-content-between mt-lg-4 delivery-choice'>
                {deliveryMethods.results.map((data) => <button key={data.id} className='btn btn-primary py-2 px-lg-3 fs-5 door'>{data.name}</button>)}
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
            <h2 className='fs-1 text-center'>{name}</h2>
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
              <h3 className='price fw-bold'>IDR {new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(price)}</h3>
            </div>
            <button className='py-4 btn btn-primary w-100 mt-5'>Add to Cart</button>
            <button className='py-4 btn btn-secondary w-100 mt-4'>Ask to Staff</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-5 my-5'>
            <div className='size-container py-3 d-flex justify-content-center align-items-center flex-column'>
              <div className='fw-bold'>Chose a Size</div>
              <div>
                <button className='btn btn-secondary my-1 mx-2 btn-size'>XL</button>
                <button className='btn btn-secondary my-1 mx-2 btn-size'>L</button>
                <button className='btn btn-secondary my-1 mx-2 btn-size'>R</button>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-7 my-5'>
            <div className='py-3 d-flex flex-row justify-content-between align-items-center px-4 checkout-container'>
              <div className='d-flex flex-row align-items-center'>
                <div className='img-bottom' style={{ backgroundImage: `url(${defaultImage})` }}></div>
                <div className='d-flex flex-column ms-2'>
                  <h3 className='fw-bold'>{name}</h3>
                  <span>xl(large)</span>
                  <span>xl(large)</span>
                </div>
              </div>
              <a className='fw-bold text-dark check-out'>Check Out <button className='btn btn-check-out bg-secondary'><AiOutlineArrowRight /></button></a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
