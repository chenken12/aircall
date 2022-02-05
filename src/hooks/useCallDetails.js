import React, { useState, useEffect } from 'react';
import axios from "axios";

const useCallDetails = (id) => {
  const [ callDetails, setCallDetails ] = useState({});

  useEffect(() => {
    axios.get(`https://aircall-job.herokuapp.com/activities/${id}`)
      .then((res) => {
        setCallDetails(res.data)
      })
  }, [id]);

  const stringAvatar = function() {
    const name = callDetails.to || "P N";
    return {
      sx: {
        bgcolor: 'orange',
        width: 64, 
        height: 64
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  };

  const toggleArchive = function() {
    const is_archive =  !callDetails.is_archived;
    // console.log(is_archive, callDetails.is_archived);
    axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, { is_archived: is_archive })
      .then((res) => {
        console.log(res);
        setCallDetails((prev) => {return {prev, is_archived: is_archive }})
      })
  };

  return {
    callDetails,
    stringAvatar,
    toggleArchive
  };

};

export default useCallDetails;