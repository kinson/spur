import React, { Component } from 'react';

export default class FileUpload extends Component {
  render() {
    const textAreaStyles = {
      width: '400px',
      height: '400px',
      borderRadius: '3px',
      visibility: this.props.text === '' ? 'hidden' : 'visible',
      color: this.props.isError === true ? 'red': 'black'
    };

    return (
      <textarea
        style={textAreaStyles}
        value={this.props.text}
      >
      </textarea>
    );
  }
}