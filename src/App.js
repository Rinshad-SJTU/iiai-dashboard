import React, { Component } from 'react';
import Logo from './component/Logo/Logo';
import Particles from 'react-particles-js';
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';
import './App.css';
import A from './component/Logo/labeled1.jpg';
import B from './component/Logo/labeled2.jpg';
import C from './component/Logo/labeled3.jpg';
import D from './component/Logo/labeled4.jpg';
import E from './component/Logo/labeled5.jpg';

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
    setTimeout(function () {
      document.getElementById("loader").style.display = "none"
      document.getElementById("result").src = A;
      document.getElementById("ul").style.display = "block";
      document.getElementById("header").style.display = "block";
    }, 2000);
    // document.getElementById("result").src = A;
    // document.getElementById("loader").style.display = "block";
    document.getElementById("grade").innerHTML = "Severe";
    document.getElementById("grade").style.color = "red";
    document.getElementById("filename").innerHTML = "01.jpg";
    document.getElementById("loader").style.display = "block"
  }

  onImageClick = (index) => {
      document.getElementById("ul").style.display = "block";
      var result = document.getElementById("result");
      var grade = document.getElementById("grade");
      var filename = document.getElementById("filename");
      switch (index) {
        case 0:
          result.src = A;
          grade.innerHTML = "Severe";
          grade.style.color = "red";
          filename.innerHTML = "01.jpg";
          break;
        case 1:
          result.src = B;
          grade.innerHTML = "Severe";
          grade.style.color = "red";
          filename.innerHTML = "02.jpg";
          break;
        case 2:
          result.src = C;
          grade.innerHTML = "Severe";
          grade.style.color = "red";
          filename.innerHTML = "03.jpg";
          break;
        case 3:
          result.src = D;
          grade.innerHTML = "Moderate";
          grade.style.color = "green";
          filename.innerHTML = "04.jpg";
          break;
        case 4:
          result.src = E;
          grade.innerHTML = "Moderate";
          grade.style.color = "green";
          filename.innerHTML = "05.jpg";
          break;
        default:
          result.src = document.getElementById(index).src;
      }
    // result.src = document.getElementById(index).src;
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
