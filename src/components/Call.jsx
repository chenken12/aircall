import React, { useState, useEffect } from 'react';

import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

export default function Call(props) { 
  const { id, from, to, created_at, handleId} = props;
  const [ date, setDate ] = useState({ 'val' : new Date()});
  var options = { year: 'numeric', month: 'long', day: 'numeric' };

  useEffect(() => {
    const newD = new Date(created_at);
    setDate({ val : newD});
  }, [created_at]);

  const mdy = date.val.toLocaleDateString("en-US", options)
  const time = `${date.val.getHours()}:${date.val.getMinutes()}`

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
          <p>from: { from }</p>
        </div>
        <p>{ time }</p>
      </div>
    </div>  
  );

}