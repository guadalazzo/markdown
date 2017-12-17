import React, { Component } from 'react';

import './textarea.css';

class Textarea extends Component {

    render() {
        return (
            <div className="textarea">

                <textarea rows="22" cols="45" onChange={this.props.onChange}>
                    {this.props.value}
                </textarea>
            </div>
        );
    }
}

export default Textarea;

