import React, { Component } from 'react';
import logo from './logo.svg';
import Textarea from './textearea/textarea'
import './App.css';
import Markdown from "./markdown/markdown";
import Navbar from "./navbar/navbar";



class App extends Component {
    state= {}//hay q definir el state
    handleChange = (event) =>{
        this.setState({value:event.target.value})
    }

  render() {
    return (
      <div className="App">
          <Navbar className="nav" />
          <Textarea value={this.state.value}  onChange={this.handleChange} />
          <Markdown value={this.state.value}/>
      </div>
    );
  }
}

export default App;
