import React, { Component } from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'



export class Confirm extends Component {

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
    const { values: {firstName, lastName, email, occupation, city, bio} } = this.props;
    return (
    <Container maxWidth="sm">
        <List >
            <ListItem>
                <ListItemText 
                    primary="First Name"
                    secondary={firstName}
                />
            </ListItem>
            <ListItem>
                <ListItemText 
                    primary="Last Name"
                    secondary={lastName}
                />
            </ListItem>
            <ListItem>
                <ListItemText 
                    primary="Email"
                    secondary={email}
                />
            </ListItem>
            <ListItem>
                <ListItemText 
                    primary="Occupation"
                    secondary={occupation}
                />
            </ListItem>
            <ListItem>
                <ListItemText 
                    primary="City"
                    secondary={city}
                />
            </ListItem>
            <ListItem>
                <ListItemText 
                    primary="Bio"
                    secondary={bio}
                />
            </ListItem>
        </List>
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


export default Confirm;