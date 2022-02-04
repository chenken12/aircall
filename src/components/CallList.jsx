import React, { useState, useEffect } from 'react';

// import { IconButton } from '@mui/material';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

export default function CallList(props) { 
  const { id, from, to, call_type, created_at} = props;
  const [ date, setDate ] = useState({ 'val' : new Date()});

  useEffect(() => {
    const newD = new Date(created_at);
    setDate({ val : newD});
  }, [created_at]);
  
  return (
    <div>
      <p>created_at: { `${date.val}` }</p>
      <div className='call-container'>
        <PhoneCallbackIcon />
        <div className='call-info'>
          <strong>{ to }</strong>
          <p>from: { from }</p>
        </div>
        <p>created_at: { created_at }</p>
      </div>
    </div>  
  );

}