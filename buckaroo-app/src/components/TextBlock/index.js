import React, { Component } from 'react';

export default class FileUpload extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const textAreaStyles = {
      width: '400px',
      height: '400px',
      borderRadius: '3px'
    }

    return (
      <textarea
        style={textAreaStyles}
      ></textarea>
    );
  }
}