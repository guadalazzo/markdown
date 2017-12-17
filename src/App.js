import React, { Component } from 'react';
import logo from './logo.svg';
import Textarea from './textearea/textarea'
import './App.css';
import Markdown from "./markdown/markdown";
import Navbar from "./navbar/navbar";



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
          <div className="expli">
              <h2>Syntax Guide</h2>
              <code>
                   <pre>
                  # This is an {'<h1>'} tag <br/>
                  ## This is an {'<h2>'} tag <br/>
                  ###### This is an {'<h6>'}tag <br/>
              </pre>
                  <pre>
                  *This text will be italic* <br/>
                  _This will also be italic_ <br/>

                  **This text will be bold** <br/>
                  __This will also be bold__ <br/>

                  _You **can** combine them_ <br/>
              </pre>
                  <pre>
                      unorder items <br/>
                      * Item 1  <br/>
                      * Item 2  <br/>
                      <span> </span>* Item 2a   <br/>
                      <span> </span>* Item 2b   <br/>
                  </pre>
                  <pre>
                      Ordered items  <br/>

                    1. Item 1 <br/>
                    1. Item 2 <br/>
                    1. Item 3 <br/>
                     <span> </span>1. Item 3a <br/>
                      <span> </span>1. Item 3b <br/>
                  </pre>
                  <pre>
                      Links <br/>

                      http://github.com - automatic! <br/>
                      {'[GitHub]'}(http://github.com)<br/>
                  </pre>
              </code>

          </div>
          <section>
              <Textarea className="text-place" value={this.state.value}  onChange={this.handleChange} />
              <Markdown className="markdown" value={this.state.value} />
          </section>

      </div>
    );
  }
}

export default App;
