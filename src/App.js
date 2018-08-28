import React, { Component } from 'react';
import Logo from './component/Logo/Logo';
import Particles from 'react-particles-js';
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'b378c08d0b5b440486ec02ca30796715'
});

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: '',
      imageURL: [null]
    };
  }

  fileSelectHandler = (event) => {
    if (this.state.imageURL[0] == null) {
      this.state.imageURL.splice(0, 1);
    }
    Array.from(event.target.files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.setState({
          imageURL: this.state.imageURL.concat(event.target.result)
        });
      };
      reader.readAsDataURL(file);
    })
    let ol = document.getElementById("ol");
    ol.style.display="block";
  }

  onImageDrop = (files) => {
    console.log(files[0].preview);
    if (this.state.imageURL[0] == null) {
      this.state.imageURL.splice(0, 1);
    }
    Array.from(files).forEach(file => {
        this.setState({
          imageURL: this.state.imageURL.concat(file)
        });
    })
  }

  onImageClick = (index) => {
    var result = document.getElementById("result");
    result.src = document.getElementById(index).src;
    // document.getElementById(index).style.border = 'solid skyblue';
  }

  upload = () => {
    document.getElementById("selectImage").click();
  }

  fileUploadHandler = (event) => {
    console.log('click!');
    app.models.predict(Clarifai.FACE_DETECT_MODEL, {base64: ""}).then(
      function(response) {
        console.log(response);
      },
      function(err) {
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <div>
          <Logo/>
          <ImageLinkForm
            fileSelectHandler={this.fileSelectHandler}
            fileUploadHandler={this.fileUploadHandler}
            imageURL={this.state.imageURL}
            upload={this.upload}
            onImageDrop={this.onImageDrop}
            onImageClick={this.onImageClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
