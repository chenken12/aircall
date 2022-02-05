import React, { useState, useEffect } from 'react';

import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

export default function Call(props) { 
  const { id, from, to, call_type, created_at} = props;
  const [ date, setDate ] = useState({ 'val' : new Date()});
  var options = { year: 'numeric', month: 'long', day: 'numeric' };

  useEffect(() => {
    const newD = new Date(created_at);
    setDate({ val : newD});
  }, [created_at]);

  const mdy = date.val.toLocaleDateString("en-US", options)
  
  return (
    <div>
      <p>{ `${mdy}` }</p>
      <div className='call-container'>
        <PhoneCallbackIcon />
        <div className='call-info'>
          <strong>{ to || "Private number"}</strong>
          <p>from: { from }</p>
        </div>
        <p>created_at: { created_at }</p>
      </div>
    </div>  
  );

}