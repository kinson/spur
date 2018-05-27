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
    data.append('file', uploadInput);
    

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.text().then((body) => {
        this.setState({ sbatchText: body });
      });
    });
   }

  render() {
    const appStyles = {
      marginTop: '100px'
    };

    return (
      <div className="App"
        style={appStyles}
      >
        <FileUpload handleUpload={this.handleUploadImage}/>
        <br />
        <TextBlock text={this.state.sbatchText}/>
      </div>
    );
  }
}

export default App;
