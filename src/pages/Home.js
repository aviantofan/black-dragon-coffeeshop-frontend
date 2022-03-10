import '../assets/css/home.css';
import { FaCheckCircle, FaCheck } from 'react-icons/fa';
import teamwork from '../assets/images/team-work.png';
import Vector from '../assets/images/Vector.png';
import Amazon from '../assets/images/amazon.png';
import Layout from '../layouts/Layout';

const Home = () => {
  return (
    <Layout>
    <header className="header-homepage home">
      <div className="opacity">
        <div className='container'>
        <div className="row">
        <form className="col-sm-6 col-lg-6">
          <h1>Start Your Day <br/> with Coffee and Good Meals </h1>
          <p>We provide high quality beans, good taste, and healthy <br/> meals made by love just for you. Start your day with us <br/> for a bigger smile!</p>
            <button className="btn btn-blue" aria-label="explore">Get Started</button>
          </form>
          <div className='col-sm-6 text-center m-0'>
            <div className="input-group rounded">
            {/* <input type="search" className="form-control rounded-pill" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
            <FaSearch/>
            </span> */}
            </div>
          </div>
        </div>
        </div>
      </div>
    </header>

    <main className='home-page'>
      <section className='container info'>
        <div className='row p-5'>
          <div className='col-lg-4 text-center p-5 info-content'>
            <div className='fw-bold'>90+</div>
            <div>Staff</div>
          </div>
          <div className='col-lg-4 text-center p-5 info-content'>
            <div className='fw-bold'>30+</div>
            <div>Store</div>
          </div>
          <div className='col-lg-4 text-center p-5'>
            <div className='fw-bold'>800+</div>
            <div>Customers</div>
          </div>
        </div>
      </section>
      <section className='container second-section'>
        <div className='row'>
          <div className='col-12 col-lg-7 d-flex justify-content-center'>
          <img src={teamwork} alt="Team-Work" />
          </div>
          <div className='col-12 col-lg-5'>
            <h2>We Provide Good Coffee and Healthy Meals</h2>
            <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
            <ul className='list-group'>
              <li> <FaCheckCircle color='#2FAB73'/> High quality beans</li>
              <li> <FaCheckCircle color='#2FAB73'/> Healthy meals, you can request the ingredients</li>
              <li> <FaCheckCircle color='#2FAB73'/> Chat with our staff to get better experience for ordering</li>
              <li> <FaCheckCircle color='#2FAB73'/> Free member card with a minimum purchase of IDR 200.000.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='third section bg-light'>
        <div className='container'>
          <div className='text-center py-5'>
            <h2>Here is People Favorite</h2>
            <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
          </div>
          <div className='row'>
            <div className='border product-card col-md-4'>
              <div className='product-circle mx-auto my-5'></div>
              ,<h4 className='py-4 text-center'>Hazelnut Latte</h4>
              <div className='d-flex justify-content-center'>
                <ul className='list-group'>
                  <li><FaCheck color='#2FAB73'/> Hazelnut Syrup</li>
                  <li><FaCheck color='#2FAB73'/> Vanilla Whipped Cream</li>
                  <li><FaCheck color='#2FAB73'/> Ice</li>
                  <li><FaCheck color='#2FAB73'/> Slice Banana on Top</li>
                </ul>
              </div>
              <div className='text-center'>
                <div className='price py-4'>IDR. 25.000</div>
                <button className='btn btn-outline-warning mb-5'>Order Now</button>
              </div>
            </div>
            <div className='border product-card col-md-4'>
              <div className='product-circle mx-auto my-5'></div>
              ,<h4 className='py-4 text-center'>Pinky Promise</h4>
              <div className='d-flex justify-content-center'>
                <ul className='list-group'>
                  <li><FaCheck color='#2FAB73'/> 1 Shot of Coffee</li>
                  <li><FaCheck color='#2FAB73'/> Vanilla Whipped Cream</li>
                  <li><FaCheck color='#2FAB73'/> Chocolate Biscuits</li>
                  <li><FaCheck color='#2FAB73'/> Strawberry Syrup</li>
                  <li><FaCheck color='#2FAB73'/> Sliced strawberry on Top</li>
                </ul>
              </div>
              <div className='text-center'>
                <div className='price py-4'>IDR 30.000</div>
                <button className='btn btn-outline-warning mb-5'>Select</button>
              </div>
            </div>
            <div className='border product-card col-md-4'>
              <div className='product-circle mx-auto my-5'></div>
              ,<h4 className='py-4 text-center'>Chicken Wings</h4>
              <div className='d-flex justify-content-center'>
                <ul className='list-group'>
                  <li><FaCheck color='#2FAB73'/> Wings</li>
                  <li><FaCheck color='#2FAB73'/> Drum Sticks</li>
                  <li><FaCheck color='#2FAB73'/> Mayonaise and Lemon</li>
                  <li><FaCheck color='#2FAB73'/> Hot Fried</li>
                  <li><FaCheck color='#2FAB73'/> Secret Recipe</li>
                  <li><FaCheck color='#2FAB73'/> Buy 1 Get 1 only for Dine in</li>
                </ul>
              </div>
              <div className='text-center'>
                <div className='price py-4'>IDR 40.000</div>
                <button className='btn btn-outline-warning mb-5'>Select</button>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='four section bg-light'>
        <div className='container'>
        <div className='text-center py-5'>
            <h2>Visit Our Store in the <br/> Spot on the Map Below</h2>
            <p>See our store in every city on the spot and spen your good day there. See you soon!</p>
            <br/>
            <img src={Vector} alt="Team-Work" />
          </div>
        </div>
      </section>
      <section className='five section bg-light'>
        <div className='container'>
        <div className='text-center py-5'>
            <h2>Our Partner</h2>
            <br/>
            <img src={Amazon} alt="Amazon" />
          </div>
        </div>
      </section>
      <section className='six section bg-light'>
        <div className='container'>
        <div className='text-center py-5'>
            <h2>Loved by Thousands of Happy Customer</h2>
            <p>These are the stories of our customers who have visited us with great pleasure.</p>
            <div className='row'>
            <div className='border product-card col-md-4'>
              <div className='product-circle mx-auto my-5'></div>
              ,<h4 className='py-4 text-center'>Viezh Robert</h4>
              <div className='d-flex justify-content-center'>
                <p>
                “Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!
                </p>
              </div>
            </div>
            <div className='border product-card col-md-4'>
              <div className='product-circle mx-auto my-5'></div>
              ,<h4 className='py-4 text-center'>Yessica Christy</h4>
              <div className='d-flex justify-content-center'>
                <p>
                “I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte
                </p>
              </div>
            </div>
            <div className='border product-card col-md-4'>
              <div className='product-circle mx-auto my-5'></div>
              ,<h4 className='py-4 text-center'>Kim Young Jou</h4>
              <div className='d-flex justify-content-center'>
                <p>
                “This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className='seven-section bg-light'>
        <div className='container promo'>
        <div className='row p-5'>
          <div className='col-lg-6 text-center p-5'>
            <div className='fw-bold'>Check our promo today!</div>
            <div>Lets see the deals and pick yours!</div>
          </div>
          <div className='col-lg-4 text-center p-5'>
          <button className='btn btn-warning'>See Promo</button>
          </div>
        </div>
        </div>
      </section>
    </main>
    </Layout>
  );
};

export default Home;
