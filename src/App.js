import './App.css';
import React, {Component, useEffect, useState} from 'react';
import { Footer } from './component/homepage/footer/footer.component';
import { Header } from './component/homepage/header/header.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import './sass/_mixin.scss';



function App() {
  

  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
}
// class App extends Component{
  
//   // componentWillMount() {
//   //   document.addEventListener("keydown", this.onKeyPressed.bind(this));
//   // }

//   // componentWillUnmount(){
//   //   document.removeEventListener("keydown", this.onKeyPressed.bind(this));
//   // }

//   // onKeyPressed(e) {
//   //   console.log(e.keyCode);
//   // }

//   render(){
    
    
//   }
// }



export default App;
