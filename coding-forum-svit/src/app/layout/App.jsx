import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class App extends Component {
  render () {
    return (
      <div className='app'>
        <h1>Coding Forum</h1>
          <button className='ui icon button'>
            <i className='smile icon'>
              CODE
            </i>
          </button>
        <Button icon='smile' content='CODE SEMANTIC'/>
      </div>
    );
  }
}

export default App;