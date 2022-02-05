import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";

import Avatar from '@mui/material/Avatar';
import useCallDetails from '../hooks/useCallDetails';
import useDate from '../hooks/useDate';
import ArchiveIcon from '@mui/icons-material/Archive';
import { IconButton } from '@mui/material';

export default function CallDetails(props) { 
  const { contactId } = props;
  const {callDetails, stringAvatar, toggleArchive }  = useCallDetails(contactId);
  const { mdy, time } = useDate(callDetails.created_at);

  return (
    <div className='call-details'>
      
      <Avatar {...stringAvatar()} />
      <div className='details-container'>
        <IconButton color="inherit" onClick={() => { toggleArchive() }}>
          <ArchiveIcon />
        </IconButton>
        <p>Caller: {callDetails.from || "Private number"}</p>
        <p>Receiver: {callDetails.to || "Private number"}</p>
        <p>Called on: {`${mdy}, at ${time}`}</p>
        <p>Duration: {callDetails.duration} mins</p>
      </div>
    </div>  
  );

}