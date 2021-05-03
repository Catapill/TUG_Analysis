import './App.css';
import React from 'react';
import axios from 'axios';

// instance
const instance = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 10000
});
class App extends React.Component {
  async onChange(event) {

   
    var formData = new FormData();
    formData.append("file", event.target.files[0]);
    instance.post('/file/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function(){
      alert("done")
    });
  }
  

  render() {
    return (
      <input type="file" accept=".cwa" onChange={this.onChange}/>
    );
  }
}
export default App;
