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




export default App;
