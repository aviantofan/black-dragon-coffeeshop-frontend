// import React from 'react'
import '../assets/scss/historieslist.scss';
import Layout from '../layouts/Layout';
import imgProduct from '../assets/images/product.jpg';

export default function HistoriesList () {
  return (
    <Layout>
      <section className='histories-list-page'>
        <div className='opacity'>
          <div className='container'>
            <div className='text-center text-white head-text'>
              <h1>Let`s see what you have bought!</h1>
              <span>Long press to delete item</span>
            </div>
            <div className='row g-4 data-histories'>
              {[...Array(15)].map((data, index) => {
                return <div key={index} className='col-12 col-md-6 col-lg-4'>
                <div className='card d-flex flex-row justify-content-between p-3 p-xl-2 p-xxl-4'>
                  <div className='img-product' style={{ backgroundImage: `url(${imgProduct})` }}></div>
                  <div className='history-text'>
                    <h4>Veggie tomato mix</h4>
                    <div>IDR 34.000</div>
                    <div>Delivered</div>
                  </div>
                </div>
              </div>;
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
