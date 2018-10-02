import React, { Component } from 'react';
import './App.css';
import Output from './Output/Output';
import Input from './Input/Input';

class App extends Component {

  state = {
    users: [
      { user: "user1", paragraph: "paragraph1", paragraph2: "paragraph2"}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      users: [
       { user: newName, paragraph: "paragraph1", paragraph2: "paragraph2"}
      ]
    } )
  }
  

  userChangedHandler = (event) => {
    this.setState({
      users: [
      { user: event.target.value, paragraph: "paragraph1", paragraph2: "paragraph2"},
    ]
    })
  }


  
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <Input 
          changed={this.userChangedHandler}/>
        <Output 
          user={this.state.users[0].user} 
          paragraph={this.state.users[0].paragraph}
          paragraph2={this.state.users[0].paragraph2}
          click={this.switchNameHandler.bind(this, "Halo!")}>hello</Output>
      </div>
    );
  }



}


export default App;
