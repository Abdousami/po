import App from './App';
import Nav from './Nav.js';
import Wallet from './Wallet.js';
import Work from './Work.js';
import Category from './Category.js';
import Sellers from './Sellers.js';
import Blogs from './Blogs.js';
import Footer from './Footer.js';
import Backtotop from './Backtotop.js'
import './Toggle.css'
import React from 'react';
import { BsToggleOn } from "react-icons/bs"; 
import { BsToggleOff } from "react-icons/bs"; 
import './All.css'

function All(){
    const [Darkmode , setDarkmode] = React.useState(false)
    const [cls , setcls] = React.useState('yes')
    const [clls , setclls] = React.useState('nones')
    const hi = function(){
        setcls('nones')
        setclls('yes')
        setDarkmode(true)
    }
    const bye = function(){
        setcls('yes')
        setclls('nones')
        setDarkmode(false)
    }
    return(
    <main className={Darkmode ? 'Darkmode' : 'modes'}>
      <Nav Darkmode = {Darkmode}/>
      <a className="toggle">
            <h6 className={Darkmode ? 'nothh' : 'hh'}>Dark mode</h6>
            <button id="cls" onClick={hi} className={cls}> <BsToggleOff /></button>
            <button id="clls" onClick={bye} className={clls}> <BsToggleOn /></button>
            </a>
      <Backtotop Darkmode = {Darkmode}/>
      <App Darkmode = {Darkmode} />
      <Wallet Darkmode = {Darkmode}/>
      <Work Darkmode = {Darkmode}/>
      <Category Darkmode = {Darkmode}/>
      <Sellers Darkmode = {Darkmode}/>
      <Blogs Darkmode = {Darkmode}/>
      <Footer Darkmode = {Darkmode}/>
    </main>
    )
}
export default All;