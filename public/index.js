import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntSwitch from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <ReactAntSwitch
          onChange={(e) => {
            console.log('value:', e.target.value);
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
