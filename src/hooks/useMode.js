import React, { useState, useEffect } from 'react';
import axios from "axios";

const useMode = () => {
  const [ calls, setCalls ] = useState([]);
  const [ mode, setMode ] = useState("inbox");
  const [ contactId, setContactId ] = useState(0);

  useEffect(() => {
    axios.get(`https://aircall-job.herokuapp.com/activities`)
      .then((res) => {
        setCalls([...res.data])
      })
  }, []);

  const handleContactId = function(id) {
    console.log(id);
    setContactId(id);
    setMode('call details')
  }

  return {
    calls,
    mode,
    setMode,
    contactId,
    handleContactId
  };

};

export default useMode;