import React, { Fragment } from 'react';

import Call from './Call.jsx';

const INBOX = 'inbox';
const ALL_CALLS = 'all calls'

export default function CallList(props) { 
  const { calls, mode } = props;

  let filterCalls = calls.filter((call) => {
    if (mode === INBOX) {
      return call.direction === "inbound"
    }
  })

  const parsedCalls = filterCalls.map((call) => <Call key={call.id} {...call}/>)
  console.log(calls);

  return (
    <Fragment>
      {parsedCalls}
    </Fragment>  
  );

}