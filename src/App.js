
import React from 'react';
import './App.css';
import Slider from './Slider.js'

function App(props) {
  return (

    <section id= {props.Darkmode ? 'notApp' : 'App'}>
      <div className={props.Darkmode ? 'notHome' : 'Home'}>
        <h1>CRT Art , Your Market Website To Interact NFTs</h1>
        <p>CRT Art a Creative Dynamic and Responsive Website is Your Market Website To  Discover ,Buy, Sell, And Interact With NFTs.</p>
        <div className='btns'>
          <a className={props.Darkmode ? 'notbtn1' : 'btn1'} href='#Work'> DISCOVER</a>
          <a className={props.Darkmode ? 'notbtn2' : 'btn2'} href='#Wallet'> WALLET</a>
        </div>
      </div>
      <div className='thatslider'>
          <Slider/>
        </div>
    </section>
  );
}

export default App;
