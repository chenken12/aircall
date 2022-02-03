import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import Header from './Header.jsx';

const App = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get(`https://aircall-job.herokuapp.com/activities`)
      .then((res) => {
        setActivities([...res.data])
      })
  }, []);

  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
