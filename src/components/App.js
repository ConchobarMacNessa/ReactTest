import React from 'react';
import Square from './Square';

class App extends React.Component {

  render() {
    return (
      <div>
        {Array.from(new Array(12)).map(_, index) => (
          <Square key={index} />
        )}
      </div>
    );
  }
}

export default App;
