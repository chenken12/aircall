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

  const updateAchive = function() {
    console.log("updateAchive: " + contactId)
    let updateCalls = [];
    for (const call of calls) {
      if (call.id === contactId) {
        let update = call;
        update.is_archived = !call.is_archived;
        updateCalls.push(update);
      } else {
        updateCalls.push(call);
      }
    }
    setCalls([...updateCalls])
  }

  return {
    calls,
    mode,
    setMode,
    contactId,
    handleContactId,
    updateAchive
  };

};

export default useMode;