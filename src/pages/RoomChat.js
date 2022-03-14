import Layout from '../layouts/Layout';
import '../assets/scss/roomchat.scss';
import { GoSearch } from 'react-icons/go';
import userChat from '../assets/images/user-chat.png';
import { Form } from 'react-bootstrap';
import BDInput from '../components/BDInput';

export default function ChatUser () {
  return (
    <Layout>
      <section className="chat-page">
        <div className='opacity'>
          <div className='container'>
            <div className='row py-5'>
              <div className='col-12 bg-secondary col-lg-5 p-5 left-content'>
                <form>
                  <div className='d-flex flex-row '>
                    <button className='btn bg-light btn-search' type='submit'><GoSearch/></button>
                    <input type='search' className='bg-light' placeholder='Search Chat' />
                  </div>
                </form>
                <div className='text-center fw-bold py-4'>Choose a staff you want to talk with</div>
                <div className='info-chat d-flex flex-row'>
                  <div style={{ backgroundImage: `url(${userChat})` }} className='photo-user'></div>
                  <div className='text-chat ps-3'>
                    <div className='fw-bold'>Jason</div>
                    <span>Hey, I’m Jason, Let’s talk and share what’s on your thoughts!</span>
                  </div>
                </div>
                <div className='border border-bottom my-3'></div>
                <div className='info-chat d-flex flex-row'>
                  <div style={{ backgroundImage: `url(${userChat})` }} className='photo-user'></div>
                  <div className='text-chat ps-3'>
                    <div className='fw-bold'>Cheryn</div>
                    <span>Hey, I’m Cheryn, can I help you? Just chat me if you have some trouble in ordering, happy shopping!</span>
                  </div>
                </div>
                <div className='border border-bottom my-3'></div>
                <div className='info-chat d-flex flex-row'>
                  <div style={{ backgroundImage: `url(${userChat})` }} className='photo-user'></div>
                  <div className='text-chat ps-3'>
                    <div className='fw-bold'>Lou</div>
                    <span>Hey, I’m Lou, I’ll here to help you, just talk to me and we solve the problme. Have a good day!</span>
                  </div>
                </div>
                <div className='border border-bottom my-3'></div>
              </div>
              <div className='col-12 col-lg-7 bg-white right-content py-4 px-5'>
                <h2 className='mb-5'>Jason</h2>
                <div className='info-chat my-4 d-flex flex-row'>
                  <div className='text-chat ps-3' >
                    <span className=''>Hey jason, I can’t find the promo section. Can u tell me where is it?</span>
                  </div>
                  <div className='d-flex justify-content-between flex-column'>
                  <div style={{ backgroundImage: `url(${userChat})` }} className='photo-user'></div>
                  </div>
                </div>
                <div className='border border-bottom my-3'></div>
                <div className='info-chat my-4 d-flex flex-row'>
                  <div style={{ backgroundImage: `url(${userChat})` }} className='photo-user'></div>
                  <div className='text-chat ps-3'>
                    <span className=''>Hey, thanks for asking. It’s in product menu, you can see them on the left side.</span>
                  </div>
                  <div className='d-flex justify-content-between flex-column'>
                    <div className='time'>10.14 PM</div>
                  </div>
                </div>
                <div className='border border-bottom my-3'></div>
                <div className='text-information text-center'>
                <Form>
                      <Form.Group className="mb-3 text-left mt-sm-4" controlId="formBasicEmail">
                      <BDInput type="text" className="mt-3" placeholder="Type a message..."></BDInput>
                    </Form.Group>
                </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
