import './App.css';
import InputField from './components/InputField';
import Image from './components/image';
import React, { Component }  from 'react';

const App: React.FC = () => {
  return(
  <div className="App">
  <span className='heading'>Greatest Store</span>  
  <button className='sideItem1'>Contact Us  </button>
  <button className='sideItem2'>View Deliveries</button>
  <InputField/>
  <div className='dashBoard'>
  <span className='textHolder'>Clothes</span>
  <div className='grid'>
    <div className='container'>
    <Image />
    <span>Product Information</span>
    <span>Product Category</span>
    <span>Price</span>
    </div>
    <div className='container'>
    <Image />
    <span>Product Information</span>
    <span>Product Category</span>
    <span>Price</span>
    </div>
    <div className='container'>
    <Image />
    <span>Product Information</span>
    <span>Product Category</span>
    <span>Price</span>
    </div>
  </div>
  <div className='footer'>
  <div className='footerContainer'>
    <span>FAQ </span>
    <span>Contact Us </span>
    <span>Affiliates</span>
    </div>
  </div>
  </div>
  
  </div>
  );
}

export default App;
