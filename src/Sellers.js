import './Sellers.css';


let list = [
    {
        name: 'James L.',
        img: 'prf1.jpg',
        id:1,
    },
    {
        name: 'Michael M.',
        img: 'prf2.jpg',
        id:2,
    },
    {
        name: 'Mary K.',
        img: 'prf3.jpg',
        id:3,
    }
    ,
    {
        name: 'John O.',
        img: 'prf4.jpg',
        id:4,
    }
    ,
    {
        name: 'Linda J.',
        img: 'prf5.jpg',
        id:5,
    },
    {
        name: 'William B.',
        img: 'prf6.jpg',
        id:6,
    }   ,
    {
        name: 'Jessica N.',
        img: 'prf7.jpg',
        id:7,
    }   ,
    {
        name: 'Daniel T.',
        img: 'prf8.jpg',
        id:8,
    }   
] 




function Sellers(propss) {
    function Linkas(props){
        return(
            <div className={propss.Darkmode ? 'notSellersitem' : 'Sellersitem'}>
                <div className={propss.Darkmode ? 'notimgggss' : 'imgggss'}>
                    <img  src= {props.img}/>
                </div>
                <h3>{props.childern}</h3>
            </div>
        )
    }
    
    const align = list.map(function(lista){
        return <Linkas  img={lista.img} childern={lista.name} key={lista.id}/>
      });
  return (
    <section id='Sellers'>
        <h1 className={propss.Darkmode ? 'noth' : 'h'}>Sellers</h1>
        <div className='Sellers'>
        {align}
        </div>
    </section>
  );
}

export default Sellers;