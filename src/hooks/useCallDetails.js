import React, { useState, useEffect } from 'react';
import axios from "axios";

const useCallDetails = (id) => {
  const [ callDetails, setCallDetails ] = useState({});

  useEffect(() => {
    axios.get(`https://aircall-job.herokuapp.com/activities/${id}`)
      .then((res) => {
        // console.log(res.data)s
        setCallDetails(res.data)
      })
  }, [id]);

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

  return {
    callDetails,
    stringAvatar
  };

};

export default useCallDetails;