import React, { useState, useEffect } from 'react';

import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import useDate from '../hooks/useDate';

export default function Call(props) { 
  const { from, to, created_at, handleId} = props;
  const { mdy, time } = useDate(created_at);

  return (
    <div>
      <div className='date-bar'>
        <span className='dot'></span>
        <p style={{padding: '0 10px'}}>{ `${mdy}` }</p>
        <span className='dot'/>
      </div>

      <div className='call-container' onClick={handleId}>
        <PhoneCallbackIcon />
        <div className='call-info'>
          <strong>{ to || "Private number"}</strong>
          <p>Tried to call on { from }</p>
        </div>
        <p className='call-time'>{ time }</p>
      </div>
    </div>  
  );

}