import { AiFillCloseCircle } from "react-icons/ai"; 
import { FaBars } from "react-icons/fa"; 
import { BsSearch } from "react-icons/bs"; 
import './Nav.css';
import React from "react";


function Nav(props) {
  const [frem , setfrem] = React.useState('fh')
  const [notfrem , setnotfrem] = React.useState('notfh')
  const [fremm , setfremm] = React.useState('ffh')
  const [notfremm , setnotfremm] = React.useState('notffh')
  const [pro , setpro] = React.useState('tdd')
  function teto(){
    setfrem('ffh')
    setnotfrem('notffh')
    setfremm('fh')
    setnotfremm('notfh')
    setpro('td')
  }
  function tetto(){
    setfrem('fh')
    setnotfrem('notfh')
    setfremm('ffh')
    setnotfremm('notffh')
    setpro('tdd')
  }
  return (
    <nav id='nav'>
        <div className={props.Darkmode ? 'notft' : 'ft'}>
            <img src={props.Darkmode ? 'their.png' : 'thei.png'}/>
            <h2>CRT Art</h2>
        </div>
        <div id={pro} className={props.Darkmode ? 'nottd' : 'td'}>
            <a href={props.Darkmode ? '#notApp' : '#App'}>Home</a>
            <a href="#Wallet">Wallet</a>
            <a href="#Work">Work</a>
            <a href="#Category">Category</a>
            <a href="#Sellers">Sellers</a>
            <a href="#Blogs">Blogs</a>
            <button onClick={tetto} className={props.Darkmode ? notfremm : fremm} id="close">
          <AiFillCloseCircle />
        </button>
        </div>
        <div className={props.Darkmode ? 'notsd' : 'sd'}>
            <input type='search' id='search' placeholder="Search"/>
            <span><BsSearch /></span>
        </div>
        <button onClick={teto} className={props.Darkmode ? notfrem : frem}>
          <FaBars />
        </button>
        
    </nav>
  );
}

export default Nav;
