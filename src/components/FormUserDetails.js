import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'



export class FormUserDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
    <Container maxWidth="sm">
          <TextField
            fullWidth
            placeholder="First Name"
            label="First Name"
            margin="normal"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            fullWidth
            placeholder="Last Name"
            label="Last Name"
            margin="normal"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            fullWidth
            placeholder="Email"
            label="Email"
            margin="normal"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <Button variant="contained" color="primary"  onClick={this.continue} style={{margin:15}}>
            Continue
            </Button>          
        </Container>
    );
  }
}


export default FormUserDetails;