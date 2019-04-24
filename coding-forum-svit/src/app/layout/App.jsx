import React, { Component } from 'react';

import EventDashBoard from '../../features/event/EventDashBoard/EventDashBoard'
import NavBar from '../../features/nav/NavBar/NavBar'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <NavBar />
        <EventDashBoard />
      </div>
    );
  }
}

export default App;