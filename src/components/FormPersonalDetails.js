import React, { Component } from 'react';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'



export class FormPersonalDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  render() {
    const { values, handleChange } = this.props;
    return (
    <Container maxWidth="sm">
          <TextField
            fullWidth
            placeholder="Enter Your Occupation"
            label="Occupation"
            margin="normal"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            fullWidth
            placeholder="Enter Your City"
            label="City"
            margin="normal"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
            fullWidth
            placeholder="Enter Your Bio"
            label="Bio"
            margin="normal"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br />
          <Button variant="contained" color="primary"  onClick={this.continue} style={{margin:15}}>
            Continue
            </Button>          
            <Button variant="contained" color="secondary" onClick={this.back} style={{margin:15}}>
            Back
            </Button>          
        </Container>
    );
  }
}


export default FormPersonalDetails;