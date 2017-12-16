import React, { Component } from 'react';

import './textarea.css';

class Textarea extends Component {
    render() {
        return (
            <div className="textarea">

                <textarea rows="40" cols="70" onChange={this.props.onChange}>
                At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
                </textarea>
            </div>
        );
    }
}

export default Textarea;

