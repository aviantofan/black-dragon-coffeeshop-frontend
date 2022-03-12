import { Component } from 'react';
import Layout from '../layouts/Layout';
import { Form, Card, ToggleButton, ToggleButtonGroup, Breadcrumb } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';
import BDButton from '../components/BDButton';
import BDInput from '../components/BDInput';
import Product from '../assets/img/image-promo.png';
import '../assets/scss/editpromoadmin.scss';

export default class InputProduct extends Component {
  render () {
    return (
      <Layout>
          <div className="container">
            <Breadcrumb className='nav-bread'>
                <Breadcrumb.Item>Favorite & Promo</Breadcrumb.Item>
                <Breadcrumb.Item active>Edit promo</Breadcrumb.Item>
            </Breadcrumb>
            <Breadcrumb className='nav-bread col3'>
                <Breadcrumb.Item active>Cancel</Breadcrumb.Item>
            </Breadcrumb>
            <div className='row mt-5'>
                <div className='col-md-5 me-md-4 col-xl-5 me-xl-5'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <img src={Product} className="img-fluid img-product rounded-circle text-center" alt="product" />
                      <Card.Title>Beef Spaghetti</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">20% OFF</Card.Subtitle>
                      <Card.Text>
                      Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                      </Card.Text>
                      <Card.Text>
                      COUPON CODE
                      </Card.Text>
                      <Card.Title>FNPR15RG</Card.Title>
                      <Card.Text>
                      Valid untill October 10th 2020
                      </Card.Text>
                    </Card.Body>
                  </Card>
                    <div className='mt-5'>
                    <Form.Group className="mb-3 align-items-left" controlId="formBasicEmail">
                      <Form.Label>Expire date :</Form.Label>
                      <BDInput type="date-time" className="mt-3" placeholder="October 7th 2020"></BDInput>
                      <BDInput type="date-time" className="mt-2" placeholder="October 10th 2020"></BDInput>
                    </Form.Group>
                    <Form.Group className="mt-5 align-items-left" controlId="formBasicEmail">
                      <Form.Label>Input promo code :</Form.Label>
                      <BDInput type="number" placeholder="FNPR15RG" className="mt-3"/>
                    </Form.Group>
                    </div>
                </div>
                <div className='col-md-6 col-xl-5'>
                  <Form>
                      <Form.Group className="mb-3 text-left mt-sm-4" controlId="formBasicEmail">
                      <Form.Label>Name:</Form.Label>
                      <BDInput type="text" className="mt-3" placeholder="Beef Spaghetti"></BDInput>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Price:</Form.Label>
                      <BDInput type="number" className="mt-3" placeholder="70.000" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Description:</Form.Label>
                      <BDInput type="number" className="mt-3" placeholder="Buy 1 Choco Oreo and get 20% off for Beef Spaghetti" />
                    </Form.Group>
                    <div>
                      <Form.Label>Input Product Size:</Form.Label>
                      <div>
                        <Form.Text>
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
                            300 gr
                          </ToggleButton>
                          <ToggleButton id="tbg-check-3" className='btn-product-size gram rounded-circle ms-2 text-cream' value={3}>
                            500 gr
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </div>
                    </div>
                    <div className="mt-4" >
                      <Form.Label>Input Delivery Methods:</Form.Label>
                      <div>
                        <Form.Text>
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
                    <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Enter the discount :</Form.Label>
                      <BDInput type="number" className="mt-3" placeholder="Example 20%" />
                    </Form.Group>
                    </div>
                    <div className="d-grid gap-2 mt-5">
                      <BDButton className="btn-primary btn-product text-cream fw-bold">Save Change</BDButton>
                    </div>
                  </Form>
                </div>
            </div>
          </div>
      </Layout>
    );
  }
}
