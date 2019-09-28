import React, { Component } from 'react';
import Container from '@material-ui/core/Container'



export class Success extends Component {

  continue = e => {
    e.preventDefault();
    //
    // call backend
    //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };



  render() {
    return (
    <Container maxWidth="sm">
        <h1>Thank you for your submission</h1>
        <p>You will receive a confirmation email shortly.</p>
        </Container>
    );
  }
}


export default Success;