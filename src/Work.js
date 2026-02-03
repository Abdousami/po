import { AiFillHeart } from "react-icons/ai"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import './Work.css';
import React from "react";
let list = [
    {
        name: 'James L.',
        img: 'prf1.jpg',
        sdname:'Logo NFT Design',
        price:'0.3ETH',
        sdimg:'Work5.jpg',
        id:1,
    },
    {
        name: 'Michael M.',
        img: 'prf2.jpg',
        sdname:'Logo NFT Design',
        price:'0.4ETH',
        sdimg:'Work2.jpg',
        id:2,
    },
    {
        name: 'Mary K.',
        img: 'prf3.jpg',
        sdname:'Logo NFT Design',
        price:'0.2ETH',
        sdimg:'Work3.jpg',
        id:3,
    },
    ,
    {
        name: 'John O.',
        img: 'prf4.jpg',
        sdname:'Logo NFT Design',
        price:'0.1ETH',
        sdimg:'Work4.jpg',
        id:4,
    }
    ,
    {
        name: 'Linda J.',
        img: 'prf5.jpg',
        sdname:'Logo NFT Design',
        price:'0.23ETH',
        sdimg:'Work8.jpg',
        id:5,
    },
    {
        name: 'William B.',
        img: 'prf6.jpg',
        sdname:'Logo NFT Design',
        price:'0.6ETH',
        sdimg:'Work6.jpg',
        id:6,
    },
    {
        name: 'Jessica N.',
        img: 'prf7.jpg',
        sdname:'Logo NFT Design',
        price:'0.4ETH',
        sdimg:'Work7.jpg',
        id:7,
    },
    {
        name: 'Daniel T.',
        img: 'prf8.jpg',
        sdname:'Logo NFT Design',
        price:'0.43ETH',
        sdimg:'Work1.jpg',
        id:8,
    }
    
] 




function Work(propss) {
    function Linkas(props){
        const [ab , setab]= React.useState('empty')
        const [abab , setabab]= React.useState('fill')
        function empty(){
            setab('fill')
            setabab('empty')
        }
        function fill(){
            setabab('fill')
            setab('empty')
        }
        
            return(
                <div className={propss.Darkmode ? 'notWorkitem' : 'Workitem'}>
                    <div className='up'>
                        <div className="immg"><img src={props.img}/></div>
                        <h3>{props.childern}</h3>
                    </div>
                    <div className="imgss"><img src={props.sdimg}/></div>
                    <h3>{props.name}</h3>
                    <div className='price'><h4><span>Price:</span>{props.price}</h4><button className={ab} onClick={empty}><AiOutlineHeart /> </button><button onClick={fill} className={abab}><AiFillHeart /> </button></div>
                    </div>
        
            )
        }
        const align = list.map(function(lista){
            return <Linkas isset={lista.isset} img={lista.img} name={lista.sdname} price={lista.price} childern={lista.name} sdimg={lista.sdimg} key={lista.id}/>
          });
  return (
    <section id='Work'>
        <h1 className={propss.Darkmode ? 'noth' : 'h'}>Work</h1>
        <div className="Work">
        {align}
        </div>
        
    </section>
  );
}

export default Work;