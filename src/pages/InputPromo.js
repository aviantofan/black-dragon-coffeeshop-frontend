import { Component } from 'react';
import Layout from '../layouts/Layout';
import { Form, ToggleButton, ToggleButtonGroup, Breadcrumb } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';
import BDButton from '../components/BDButton';
import BDInput from '../components/BDInput';
import img from '../assets/img/profile-pict-placeholder.png';
import '../assets/scss/InputProduct.scss';

export default class InputPromo extends Component {
  render () {
    return (
      <Layout>
          <div className="container">
            <Breadcrumb className='nav-bread'>
                <Breadcrumb.Item>Favourite & Promo</Breadcrumb.Item>
                <Breadcrumb.Item active>Add new product</Breadcrumb.Item>
            </Breadcrumb>
            <div className='row mt-5'>
                <div className='col-md-5 me-md-4 col-xl-5 me-xl-5'>
                    <div className='text-center'>
                      <img src={img} className="img-fluid img-product rounded-circle text-center" alt="product"/>
                    </div>
                    <div className="d-grid gap-2 mt-4">
                      <BDButton className="btn-primary btn-product text-cream fw-bold">Take a picture</BDButton>
                      <BDButton className="btn-secondary btn-product text-cream fw-bold">Chose from gallery</BDButton>
                    </div>
                    <div className='mt-5'>
                    <Form.Group className="mb-3 align-items-left" controlId="formBasicEmail">
                      <Form.Label>Enter the discount:</Form.Label>
                      <BDInput type="date-time" className="mt-3" placeholder="Input discount"></BDInput>
                    </Form.Group>
                </div>
                    <div className='mt-5'>
                    <Form.Group className="mb-3 align-items-left" controlId="formBasicEmail">
                      <Form.Label>Expired Date:</Form.Label>
                      <BDInput type="date" className="mt-3" placeholder="Select start hour"></BDInput>
                      <BDInput type="date" className="mt-2" placeholder="Select end hour"></BDInput>
                    </Form.Group>
                    <Form.Group className="mt-5 align-items-left" controlId="formBasicEmail">
                      <Form.Label>Input Cupon Code:</Form.Label>
                      <BDInput type="text" placeholder="Input Cupon Code" className="mt-3"/>
                    </Form.Group>
                    </div>
                </div>
                <div className='col-md-6 col-xl-5'>
                  <Form>
                      <Form.Group className="mb-3 text-left mt-sm-4" controlId="formBasicEmail">
                      <Form.Label>Name:</Form.Label>
                      <BDInput type="text" className="mt-3" placeholder="Type product name min.50 characters"></BDInput>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Price:</Form.Label>
                      <BDInput type="number" className="mt-3" placeholder="Type the price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Description:</Form.Label>
                      <BDInput type="number" className="mt-3" placeholder="Describe your promo min. 150 characters" />
                    </Form.Group>
                    <div>
                      <Form.Label>Input Product Size:</Form.Label>
                      <div>
                        <Form.Text id="passwordHelpBlock" muted>
                          Click product size you want to use for this promo
                        </Form.Text>
                      </div>
                      <div className="mt-3">
                        <ToggleButtonGroup type="checkbox" className="mb-2 form-checkbox justify content-center">
                          <ToggleButton id="tbg-check-1" className='btn-product-size cup rounded-circle ms-2 text-cream' value={1}>
                            R
                          </ToggleButton>
                          <ToggleButton id="tbg-check-2" className='btn-product-size cup rounded-circle ms-2 text-cream' value={2}>
                            L
                          </ToggleButton>
                          <ToggleButton id="tbg-check-3" className='btn-product-size cup rounded-circle ms-2 text-cream' value={3}>
                            XL
                          </ToggleButton>
                          <ToggleButton id="tbg-check-3" className='btn-product-size gram rounded-circle ms-2 text-cream' value={3}>
                            250 gr
                          </ToggleButton>
                          <ToggleButton id="tbg-check-3" className='btn-product-size gram rounded-circle ms-2 text-cream' value={3}>
                            250 gr
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </div>
                    </div>
                    <div className="mt-4" >
                      <Form.Label>Input Delivery Methods:</Form.Label>
                      <div>
                        <Form.Text id="passwordHelpBlock" muted>
                        Click methods you want to use for this promo
                        </Form.Text>
                      </div>
                      <div className="mt-3">
                        <ToggleButtonGroup type="checkbox" className="mb-2 form-checkbox">
                          <ToggleButton id="tbg-check-1" className='btn-deliver-method ms-3 text-cream fw-bold' value={1}>
                            Home Delivery
                          </ToggleButton>
                          <ToggleButton id="tbg-check-2" className='btn-deliver-method ms-3 text-cream fw-bold' value={2}>
                            Dine in
                          </ToggleButton>
                          <ToggleButton id="tbg-check-3" value={3} className='btn-deliver-method text-cream ms-3 fw-bold'>
                          Take away
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </div>
                    </div>
                    <div className="d-grid gap-2 mt-5">
                      <BDButton className="btn-primary btn-product text-cream fw-bold">Save Product</BDButton>
                      <BDButton className="btn-secondary btn-product text-cream fw-bold">Cancel</BDButton>
                    </div>
                  </Form>
                </div>
            </div>
          </div>
      </Layout>
    );
  }
}
