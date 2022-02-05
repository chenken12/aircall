import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import { AppBar, Toolbar, Box, Fab, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import DialpadIcon from '@mui/icons-material/Dialpad';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AdjustIcon from '@mui/icons-material/Adjust';

import CallList from './components/CallList.jsx';
import Header from './Header.jsx';

const App = () => {
  const [ calls, setCalls ] = useState([]);
  const [ mode, setMode ] = useState("inbox")

  useEffect(() => {
    axios.get(`https://aircall-job.herokuapp.com/activities`)
      .then((res) => {
        setCalls([...res.data])
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

  // const parsedCalls = calls.map((call) => <CallList key={call.id} {...call}/>)

  return (
    <div className='container'>
      <Header/>
   
      <div className="container-view">
      <CallList key={"CallList"} calls={calls} mode={mode}/>
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
            <DialpadIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
         
          <IconButton color="inherit" onClick={() => { console.log('SettingsIcon'); }}>
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => { console.log('AdjustIcon'); }}>
            <AdjustIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
