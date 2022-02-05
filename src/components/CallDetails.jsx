import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";

import Avatar from '@mui/material/Avatar';

export default function CallDetails(props) { 
  const { contactId } = props;
  const [ callDetails, setCallDetails ] = useState({})

  useEffect(() => {
    axios.get(`https://aircall-job.herokuapp.com/activities/${contactId}`)
      .then((res) => {
        // console.log(res.data)s
        setCallDetails(res.data)
      })
  }, [contactId]);

  function stringAvatar() {
    const name = callDetails.to || "P N";
    return {
      sx: {
        bgcolor: 'orange',
        width: 64, 
        height: 64
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Fragment>
        <Avatar 
          {...stringAvatar()} 
        />
      <p>{callDetails.id}</p>
      <p>{callDetails.created_at}</p>
      <p>{callDetails.direction}</p>
      <p>{callDetails.from}</p>
    </Fragment>  
  );

}