import { BsPerson } from "react-icons/bs"; 
import { AiFillCalendar } from "react-icons/ai"; 
import './Blogs.css';


let list = [
    {
        childern: 'The Art Enthusiast',
        img: 'blogs1.jpg',
        id:1,
        name:'Thomas.L',
    },
    {
        childern: 'Art World Weekly',
        img: 'blogs2.jpg',
        id:2,
        name:'Mark.T',
    },
    {
        childern: 'The Art Review',
        img: 'blogs3.jpg',
        id:3,
        name:'Andrew.S',
    }
    
] 




function Blogs(propss) {
    function Linkas(props){
        return(
            <div className={propss.Darkmode ? 'notBlogsitem' : 'Blogsitem'}>
                <div className='immggss'>
                    <img src= {props.img}/>
                </div>
                <h3>{props.childern}</h3>
                <div className='details'>
                    <div className={propss.Darkmode ? 'nottoo' : 'too'}>
                    <span><AiFillCalendar /></span>
                    <p> 05 Jul 2024</p>
                    </div>
                    <div className={propss.Darkmode ? 'nottoo' : 'too'}>
                    <span><BsPerson /></span>
                    <p> {props.name}</p>
                    </div>
                </div>
            </div>
        )
    }
    
    const align = list.map(function(lista){
        return <Linkas name={lista.name} img={lista.img} childern={lista.childern} key={lista.id}/>
      });
  return (
    <section id='Blogs'>
        <h1 className={propss.Darkmode ? 'noth' : 'h'}>Blogs</h1>
        <div className="Blogs">
        {align }
        </div>
        
    </section>
  );
}

export default Blogs;