import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";

import Avatar from '@mui/material/Avatar';
import useCallDetails from '../hooks/useCallDetails';

export default function CallDetails(props) { 
  const { contactId } = props;
  const {callDetails, stringAvatar }  = useCallDetails(contactId);

  return (
    <div className='call-details'>
      <Avatar {...stringAvatar()} />
      <div className='details-container'>
        <p>Caller: {callDetails.from}</p>
        <p>Receiver: {callDetails.to}</p>
        <p>{callDetails.created_at}</p>
        <p>Duration: {callDetails.duration} mins</p>
      </div>
    </div>  
  );

}