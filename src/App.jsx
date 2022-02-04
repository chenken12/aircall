import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { AppBar, Toolbar, Box, Fab, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
// import  from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';

import NavBar from './components/NavBar.jsx';
import Header from './Header.jsx';

const App = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get(`https://aircall-job.herokuapp.com/activities`)
      .then((res) => {
        setActivities([...res.data])
      })
  }, []);

  const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });

  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        Some activities should be here

        
      
      </div>

      <AppBar position="relative" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => { console.log('LocalPhoneIcon'); }}>
            <LocalPhoneIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => { console.log('PersonOutlineIcon'); }}>
            <PersonOutlineIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
         
          <IconButton color="inherit" onClick={() => { console.log('SettingsIcon'); }}>
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => { console.log('MenuIcon'); }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
