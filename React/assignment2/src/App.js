import React, { Component } from 'react';
import './App.css';
import Output from './Output/Output';




class App extends Component {

  state = {
    output: [
      {id:1, name:"hello"}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.outputs.findIndex(p => {
      return p.id === id;
    });

    const outputs = {
      ...this.state.outputs[personIndex]
    };

    output.name = event.target.value;
    const outputs = [...this.state.outputs];
    outputs[personIndex] = output;

    this.setState({ outputs: outputs } );
  }


  let outputs = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.output.map((output, index) => {
            return <Output 
              name={output.name} 
              key={output.id} 
              changed={() => this.nameChangedHandler(output.id) }/>
          })}
        </div> 
      );
    }




  render() {
    return (
      <div className="App">
        <Output name={this.state.output[0].name}/>
        {outputs}
      </div>
    );
  }
}

export default App;
