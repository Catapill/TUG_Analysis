import './App.css';
import React from 'react';
import axios from 'axios';

//TODO: fix connection via instance
// const instance = axios.create({
//   baseURL: 'http://localhost:8080/api/',
//   timeout: 10000
// });
class App extends React.Component {
  async onChange(event) {

   
    var formData = new FormData();
    formData.append("file", event.target.files[0]);
    //hardcoded conection = bad
    //might make things difficult in the future 
    //sends the node server a request to post in postgreSQL database
    axios.post('http://localhost:8080/api/file/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function(){
      alert("done")
    });
  }
  

  render() {
    return (
      //TODO: Change button to submit and hold that acction untill button is pressed instead of instant submit
      <input type="file" accept=".cwa" onChange={this.onChange}/>
    );
  }
}
export default App;
