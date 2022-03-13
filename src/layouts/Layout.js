import { Component } from 'react';
import BDFooter from '../components/BDFooter';
import BDNavbar from '../components/BDNavbar';
import '../assets/scss/Layout.scss';

export default class Layout extends Component {
  render () {
    const { notUseNavbar } = this.props;
    return (
      <>
      {notUseNavbar ? '' : <BDNavbar />}
          <div className={`layout-container ${notUseNavbar ? 'navbar-less' : ''}`}>
            {this.props.children}
          </div>
        <BDFooter />
      </>
    );
  }
}
