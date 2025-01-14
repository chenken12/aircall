import React from 'react';
import ReactDOM from 'react-dom';

import { AppBar, Toolbar, Box, Fab, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import DialpadIcon from '@mui/icons-material/Dialpad';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AdjustIcon from '@mui/icons-material/Adjust';

import CallList from './components/CallList.jsx';
import CallDetails from './components/CallDetails.jsx'
import Contacts from './components/Contacts.jsx';
import useMode from './hooks/useMode.js';
import Header from './Header.jsx';

const App = () => {
  const { calls, mode, contactId, setMode, handleContactId, updateAchive} = useMode();

  const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -20,
    left: 0,
    right: 0,
    margin: '0 auto',
    border: '3px solid #1976d2'
  });

  return (
    <div className='container'>
      <Header setMode={setMode} />
   
      <div className="container-view">
        {(mode === 'inbox' || mode === 'all calls' || mode === 'archive') && 
          <CallList key={"CallList"} calls={calls} mode={mode} setMode={setMode} handleContactId={handleContactId} />
        }
        {mode === 'call details' && <CallDetails key={"CallDetails"} contactId={contactId} updateAchive={updateAchive}/>}
        {mode === 'contacts' && <Contacts />}
      </div>

      <AppBar position="relative" color="primary" className='AppBar' sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => { setMode('inbox'); }}>
            <LocalPhoneIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => { setMode('contacts'); }}>
            <PersonOutlineIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add" onClick={() => { console.log('Dialpad'); }}>
            <DialpadIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 2 }} />
         
          <IconButton color="inherit" onClick={() => { console.log('Settings'); }}>
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => { console.log('Adjust'); }}>
            <AdjustIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
