import React from 'react';
import axios from "axios";

import Avatar from '@mui/material/Avatar';
import useCallDetails from '../hooks/useCallDetails';
import useDate from '../hooks/useDate';
import ArchiveIcon from '@mui/icons-material/Archive';
import { IconButton } from '@mui/material';

export default function CallDetails(props) { 
  const { contactId, updateAchive } = props;
  const {callDetails, stringAvatar, toggleArchive }  = useCallDetails(contactId);
  const { mdy, time } = useDate(callDetails.created_at);

  return (
    <div className='call-details'>
      
      <Avatar {...stringAvatar()} />
      <div className='details-container'>
        
        <p>Caller: {callDetails.from || "Private number"}</p>
        <p>Receiver: {callDetails.to || "Private number"}</p>
        <p>Called on: {`${mdy}, at ${time}`}</p>
        <p>Duration: {callDetails.duration} seconds</p>
        <div className='toggle-archive'>
          {/* the callDetails kinda of bug it work after a few click*/}
          <p>
            {callDetails.is_archived === true && 'Current archived'}
            {callDetails.is_archived === false && 'Current not archived'}
          </p>
          
          <div>
            <IconButton color="inherit" onClick={() => { 
              toggleArchive();
              updateAchive();
            }}>
              <ArchiveIcon />
            
            </IconButton>
            <a>Archive</a>
          </div>
    
        </div>
      </div>
    </div>  
  );

}