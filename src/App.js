import React, { Component } from 'react';
import Playground from 'component-playground';
import './App.css';
import ScatterPlot from './ScatterPlot';
import Arc from './Arc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Playground</h2>
        </div>
	<div className="App-body">
          <Playground codeText={`
<Arc
  data={[1, 5, 8, 12]}
  height={400}
  width={400}
/>
          `} scope={{React, Arc}}/>
	</div>
      </div>
    );
  }
}

export default App;
