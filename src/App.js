import React, { Component } from 'react';
import Logo from './component/Logo/Logo';
import Particles from 'react-particles-js';
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';
import './App.css';
import axios from 'axios';

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
      imageURL: [null],
      temporary: ''
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
    console.log(files[0]);
    const fd = new FormData();
    fd.append('qqfile', files[0], files[0].name);
    axios.post('http://localhost:5526/upload', fd)
      .then(res => {
        document.getElementById("result").src = "http://localhost:5526/static/processed_file/"+res.data.new_image;
      });
    document.getElementById("ul").style.display = "block";
    document.getElementById("header").style.display = "block";
    document.getElementById("grade").innerHTML = "ZZZ";
    document.getElementById("grade").style.color = "red";
    document.getElementById("filename").innerHTML = "XXX";
  }

  onImageClick = (index) => {
      document.getElementById("ul").style.display = "block";
      var result = document.getElementById("result");
      result.src = document.getElementById(index).src;
      const picture = document.getElementById(index);
      fetch(picture.src)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], picture.alt, blob)
          console.log(file)
          const fd = new FormData();
          fd.append('qqfile', file, picture.alt);
          axios.post('http://localhost:5526/upload', fd)
            .then(res => {
              result.src = "http://localhost:5526/static/processed_file/"+res.data.new_image;
            });
        })
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
