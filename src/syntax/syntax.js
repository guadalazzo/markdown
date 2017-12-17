import React, { Component } from 'react';

import './syntax.css';

class Syntax extends Component {

    constructor(props) {
        super(props);
        this.state = {
            condition: false
        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            condition: !this.state.condition
        });
    }

    render() {
        return (
            <div className={this.state.condition ? "expli activo" : "expli "} onClick={this.handleClick}>
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
        );
    }
}

export default Syntax;
