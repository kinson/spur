import React, { Component } from 'react';

export default class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileName: '',
      uploadInput: ''
    };
  }

  uploadFile(ev) {
    this.props.handleUpload(ev, this.state.uploadInput);
  }

  onFileInputChange(event) {
    if (event.target.files[0]) {
      this.setState({
        fileName: event.target.files[0].name,
        uploadInput: event.target.files[0]
      })
    }
  }

  render() {
    const inputStyle = {
      width: '0.1px',
      height: '0.1px',
      opacity: '0',
      overflow: 'hidden',
      position: 'absolute',
      zIndex: '-1'
    };

    const labelStyle = {
      fontSize: '1.25em',
      fontWeight: '700',
      color: 'white',
      backgroundColor: 'red',
      display: 'inline-block',
      padding: '10px',
      borderRadius: '3px',
      boxShadow: '3px 2px 1px #333'
    }

    const fileNameStyle = {
      fontSize: '1.2em',
      borderRadius: '3px',
      height: '20px',
      width: '180px',
      marginRight: 'auto',
      marginLeft: 'auto',
      textAlign: 'center'
    };

    const submitStyle = {
      fontSize: '1.5em',
      backgroundColor: 'blue',
      width: '300px',
      height: '45px',
      color: 'white',
      borderRadius: '3px',
      boxShadow: '3px 2px 1px #333'
    }

    return (
      <form onSubmit={this.uploadFile.bind(this)}>
      <div>
        <input
          id="file"
          name="file"
          onChange={this.onFileInputChange.bind(this)}
          type="file"
          style={inputStyle} />
        <label htmlFor="file" style={labelStyle}>Choose a file</label>
      </div>
      <br />
      <div>
        <p style={fileNameStyle}> {this.state.fileName} </p>
      </div>
      <br />
      <div>
        <button style={submitStyle} >Upload</button>
      </div>
    </form>
    )
  }
}