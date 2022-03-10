import { Component } from 'react';
import BDFooter from '../components/BDFooter';
import BDNavbar from '../components/BDNavbar';
import '../assets/scss/Layout.scss';

export default class Layout extends Component {
  render () {
    return (
      <>
        <BDNavbar />
          <div className="layout-container">
            {this.props.children}
          </div>
        <BDFooter />
      </>
    );
  }
}
