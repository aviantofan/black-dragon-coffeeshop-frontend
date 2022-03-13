// import React from 'react';
import '../assets/css/product-list.css';
import Layout from '../layouts/Layout';
import mother from '../assets/images/mother.png';
import father from '../assets/images/father.png';
import grandFather from '../assets/images/grand-father.png';
import CardPromo from '../components/CardPromo';
import product from '../assets/images/product.jpg';
import CardProduct from '../components/CardProduct';

export default function ProductList () {
  return (
   <Layout>
      <div className='product-list border-top container'>
        <div className='row main-content'>
          <aside className='col-12 col-lg-4 pt-5 pe-5 border-end'>
            <div className='text-center mb-5'>
              <h3 className='text-dark'>Promo Today</h3>
              <p>Coupons will be updated every weeks. <br/>Check them out! </p>
            </div>
            <div className='card-section pt-lg-4'>
              <CardPromo picture={mother} background='secondary'>
                <div>
                  <span className='fw-bold'>HAPPY MOTHER`S DAY!</span> <br/>
                  Get one of our favorite menu for free!
                </div>
              </CardPromo>
              <CardPromo picture={father} background='primary'>
                <div>
                  <span className='fw-bold'>Get a cup of coffee for free on sunday morning</span> <br/>
                  Only at 7 to 9 AM
                </div>
              </CardPromo>
              <CardPromo picture={mother} background='secondary'>
                <div>
                  <span className='fw-bold'>HAPPY MOTHER`S DAY!</span> <br/>
                  Get one of our favorite menu for free!
                </div>
              </CardPromo>
              <CardPromo picture={grandFather} background='third'>
                <div>
                  <span className='fw-bold'>HAPPY HALLOWEEN!</span> <br/>
                  Do you like chicken wings? Get 1 free only if you buy pinky promise
                </div>
              </CardPromo>
              <div className='mt-5'>
                <button className='btn btn-primary w-100 py-4 fw-bold'>Apply Coupon</button>
              </div>
              <div className='mt-5 pt-5 terms'>
                <span className='fw-bold'>Terms and Condition</span>
                <ol className='list-group ps-3'>
                  <li>You can only apply 1 coupon per day</li>
                  <li>It only for dine in</li>
                  <li>Buy 1 get 1 only for new user</li>
                  <li>Should make member card to apply coupon</li>
                </ol>
              </div>
            </div>
          </aside>
          <section className='col-12 col-lg-8 pt-3 ps-5'>
            <div className='list-category'>
              <ul className='list-group d-flex flex-row justify-content-between'>
                <li><a href='#' className='category text-primary'>Favorite & Promo</a></li>
                <li><a href='#' className='category text-primary'>Coffe</a></li>
                <li><a href='#' className='category text-primary'>Non Coffe</a></li>
                <li><a href='#' className='category text-primary'>Foods</a></li>
                <li><a href='#' className='category text-primary'>Add-on</a></li>
              </ul>
            </div>
            <div className='product-list mt-5'>
              <div className='row g-5'>
                <CardProduct image={product} name='Summer Fried Chicken' price='50.000' discount='50%' />
                <CardProduct image={product} name='Summer Fried Chicken' price='50.000' />
                <CardProduct image={product} name='Summer Fried Chicken' price='50.000' discount='50%' />
                <CardProduct image={product} name='Summer Fried Chicken' price='50.000' />
                <CardProduct image={product} name='Summer Fried Chicken' price='50.000' />
                <CardProduct image={product} name='Summer Fried Chicken' price='50.000' />
                <CardProduct image={product} name='Summer Fried Chicken' price='50.000' />
                <CardProduct image={product} name='Summer Fried Chicken' price='50.000' discount='50%' />
                <CardProduct image={product} name='Summer Fried Chicken' price='50.000' />
                <CardProduct image={product} name='Summer Fried Chicken' price='50.000' discount='50%' />
                <CardProduct image={product} name='Summer Fried Chicken' price='50.000' />
                <CardProduct image={product} name='Summer Fried Chicken' price='50.000' discount='50%' />
              </div>
            </div>
            <div className='mt-4'>*the price has been cutted by discount appears</div>
          </section>
        </div>
      </div>
   </Layout>
  );
}
