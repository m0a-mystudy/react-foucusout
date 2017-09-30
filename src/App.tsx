import * as React from 'react';
import Container from './container';
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Container
          onSave={console.log}
        />
      </div>
    );
  }
}

export default App;
