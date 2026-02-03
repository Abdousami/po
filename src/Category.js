import './Category.css';


let list = [
    {
        name: 'Music',
        img: 'Music1.jpg',
        sdimg:'Music2.jpg',
        id:1,
        tdimg:'Music3.jpg'
    },
    {
        name: 'Domain NFTs',
        img: 'Nft1.jpg',
        sdimg:'Nft2.jpg',
        id:2,
        tdimg:'Nft3.jpg'
    },
    {
        name: 'Art',
        img: 'Art1.jpg',
        sdimg:'Art2.jpg',
        id:6,
        tdimg:'Art3.jpg'
    },
    {
        name: 'Sports',
        img: 'sports1.jpg',
        sdimg:'sports2.jpg',
        id:3,
        tdimg:'sports3.jpg'
    }
    ,
    {
        name: 'Game objects',
        img: 'Game1.jpg',
        sdimg:'Game2.jpg',
        id:4,
        tdimg:'Game3.jpg'
    }
    ,
    {
        name: 'Photography',
        img: 'Camera1.jpg',
        sdimg:'Camera2.jpg',
        id:5,
        tdimg:'Camera3.jpg'
    }    
] 




function Category(propss) {
    function Linkas(props){
        return(
            <div className={propss.Darkmode ? 'notCategoryitem' : 'Categoryitem'}>
                <div className='imgssss'>
                   <img src={props.img}/>
                   <img src={props.sdimg}/>
                   <img src={props.tdimg}/>
                </div>
                <h3>{props.childern}</h3>
            </div>
        )
    }
    
    const align = list.map(function(lista){
        return <Linkas tdimg={lista.tdimg} img={lista.img}childern={lista.name} sdimg={lista.sdimg} key={lista.id}/>
      });
  return (
    <section id='Category'>
        <h1 className={propss.Darkmode ? 'noth' : 'h'}>Categorys</h1>
        <div className='Category'>
        {align}
        </div>
        
    </section>
  );
}

export default Category;