import React, { Component } from 'react';
import ReactMarkdown  from 'react-markdown';

import './markdown.css';

class Markdown extends Component {
    render() {
        return (
            <ReactMarkdown className="mark" source={this.props.value} />
        );
    }
}

export default Markdown;

