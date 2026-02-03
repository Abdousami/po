import { BsInstagram } from "react-icons/bs"; 
import { AiOutlineLinkedin } from "react-icons/ai"; 
import { CgFacebook } from "react-icons/cg"; 
import './Footer.css';


function Footer(props) {
  return (
    <footer id={props.Darkmode ? 'notFooter' : 'Footer'}>
      <div className="top">
        <div className={props.Darkmode ? 'notfooter-top' : 'footer-top'}>
          <a href="#App" className={props.Darkmode ? 'notiimmgsss' : 'iimmgsss'}>
            <img src={props.Darkmode ? 'their.png' : 'thei.png'} alt=""/>
            <span >CRT ART</span>
          </a>
          <p>CRT Art a Creative Dynamic and Responsive Website is Your Market Website To  Discover ,Buy, Sell, And Interact With NFTs.</p>
          <div className={props.Darkmode ? 'notfooterlnk' : 'footerlnk'}>
            <a href="#" ><CgFacebook /></a>
            <a href="#" ><AiOutlineLinkedin /></a>
            <a href="#" ><BsInstagram /></a>
          </div>
        </div>
      <div className={props.Darkmode ? 'notfooter-links' : 'footer-links'}>
        <h4>Useful Links</h4>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Category">Category</a></li>
          <li><a href="#Blogs">Blogs</a></li>
          <li><a href="#Sellers">Sellers</a></li>
          <li><a href="#Wallet">Wallet</a></li>
        </ul>
      </div>
      <div className={props.Darkmode ? 'notfooter-links' : 'footer-links'}>
        <h4>Our Services</h4>
        <ul>
          <li><a href="#">Sell</a></li>
          <li><a href="#">Buy</a></li>
          <li><a href="#">Manage Account</a></li>
          <li><a href="#">NFTs</a></li>
          <li><a href="#">Discover</a></li>
        </ul>
      </div>
      <div className={props.Darkmode ? 'notfooter-contact' : 'footer-contact'}>
        <h4>Contact Us</h4>
        <p>Lorem ipsum Lorem <br/> London<br/>UK <br/><br/><strong>Phone</strong>: +25 756374U70<br/><strong>Email</strong>:In@CRTArt.com<br/></p>
      </div>
      </div>
      
     <div className="container">
      <div className={props.Darkmode ? 'notcopyright' : 'copyright'}>
         Copyright <strong><span>CRT Art :: AbdouSami</span></strong>. All Rights Reserved
      </div>
      </div>
   </footer>
  )
}

export default Footer;