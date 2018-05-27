import React, { Component } from 'react';

export default class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      uploadInput: ''
    };

    // this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  uploadFile(ev) {
    console.log(this.state);
    console.log(this.props);
    // this.props.setUploadFile(this.state.uploadInput);
    this.props.handleUpload(ev, this.state.uploadInput);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('called2');
    this.props.setUploadFile(this.state.uploadInput);
  }

  render() {

    return (
      <form onSubmit={this.uploadFile.bind(this)}>
      <div>
        <input ref={(ref) => { this.state.uploadInput = ref; }} type="file" />
      </div>
      <br />
      <div>
        <button>Upload</button>
      </div>
    </form>
    )
  }
}