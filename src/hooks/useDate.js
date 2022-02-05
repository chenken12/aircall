import React, { useState, useEffect } from 'react';

const useDate = (created_at) => {
  const [ date, setDate ] = useState({ 'val' : new Date()});
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  useEffect(() => {
    const newD = new Date(created_at);
    setDate({ val : newD});
  }, [created_at]);

  const mdy = date.val.toLocaleDateString("en-US", options)
  const time = `${date.val.getHours()}:${date.val.getMinutes()}`

  return {
    mdy,
    time
  };

};

export default useDate;