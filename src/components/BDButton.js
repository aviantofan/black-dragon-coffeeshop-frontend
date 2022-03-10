import { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class BDButton extends Component {
  render () {
    const { ...rest } = this.props;
    return (
      <Button
        {...rest}
      >
        {this.props.children}
      </Button>
    );
  }
}
