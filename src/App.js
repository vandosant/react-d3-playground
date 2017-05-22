import React, { Component } from 'react';
import Playground from 'component-playground';
import './App.css';
import ScatterPlot from './ScatterPlot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Playground</h2>
        </div>
	<div className="App-body">
          <Playground codeText={'<div>hi</div>'} scope={{React, ScatterPlot}}/>
	</div>
      </div>
    );
  }
}

export default App;
