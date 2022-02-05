import React, { Fragment } from 'react';

import ArchiveIcon from '@mui/icons-material/Archive';
import Call from './Call.jsx';

const INBOX = 'inbox';
const ALL_CALLS = 'all calls'
const ARCHIVE = 'archive'

export default function CallList(props) { 
  const { calls, mode, setMode, handleContactId } = props;

  let filterCalls = calls.filter((call) => {
    if (mode === INBOX) {
      return call.direction === "inbound"
    }
    if (mode === ARCHIVE) { 
      return call.is_archived
    }
    if (mode === ALL_CALLS) { 
      return true;
    }
  })
  
  const archive_tab = function() {
    return (
      <div className='archive' onClick={() => {setMode('archive')}}>
        <ArchiveIcon />
        <a>Archive all calls</a>
      </div>
    )
  };

  const parsedCalls = filterCalls.map((call) => <Call key={call.id} {...call} handleId={() => {handleContactId(call.id)}}/>)

  return (
    <Fragment>
      {mode === INBOX && archive_tab()}
      {parsedCalls}
    </Fragment>  
  );

}