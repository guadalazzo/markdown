import React, { Component } from 'react';
import logo from './logo.svg';
import Textarea from './textearea/textarea'
import './App.css';
import Markdown from "./markdown/markdown";
import Navbar from "./navbar/navbar";
import Syntax from "./syntax/syntax";



class App extends Component {
    constructor(){
        super();
        // noinspection JSAnnotator
        this.state= {value:  "# Sample Markdown Heading \n  Edit or replace this" +
        " \n ----------- \n  \n### Another deeper heading \n \nParagraphs are " +
        "separated by a blank line. \n \n Leave 2 spaces at the end of a line to do a  " +
        "line break \n \n Text attributes *italic*, **bold**, \n `monospace`, ~~strikethrough~~ ." +
        " \n \n Unordered list: \n \n  * apples \n  * oranges \n  * pears \n \n Numbered list:\n " +
        " \n  1. apples \n  2. oranges \n  3. pears \n \n---\n \n#### Created by: \n[Guadalupe Lazzo]" +
        "(https://guadalazzo.github.io 'Guadalupe Lazzo\\\'s Website\\')"}
}
   handleChange = (event) =>{
        this.setState({value:event.target.value})
    };

  render() {
    return (
      <div className="App">
          <Navbar className="nav" />
            <Syntax/>
          <section>
              <Textarea className="text-place" value={this.state.value}  onChange={this.handleChange} />
              <Markdown className="markdown" value={this.state.value} />
          </section>

      </div>
    );
  }
}

export default App;
