import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileUpload from './components/FileUpload';
import TextBlock from './components/TextBlock';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sbatchText: '',
      uploadFile: ''
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev, uploadInput) {
    ev.preventDefault();

    const data = new FormData();
    debugger
    data.append('file', uploadInput.files[0]);
    

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      // this.setState({ imageURL: `http://localhost:8000/${body.file}` });
      console.log(response);
    });
  }

  handleImageChange(data) {
    console.log('called');
    this.setState({ uploadFile: data });
  }

  render() {
    return (
      <div className="App">
        <FileUpload handleUpload={this.handleUploadImage} setUploadFile={this.handleImageChange.bind(this)}/>
        <br />
        <TextBlock />
      </div>
    );
  }
}

export default App;
