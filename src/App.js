import React from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';

import { UserForm } from './components/UserForm'


function App() {

  return (
      <div className="App">
        <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                            <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" >
                      User Details
                    </Typography>
                    </Toolbar>
        </AppBar>
        <UserForm />
      </div>
  );
}

export default App;
