import './Wallet.css';
let list = [
    {
        name: 'MetaMask',
        img: '1.png',
        id:1,
        sdimg:'1.png'
    },
    {
        name: 'Trust',
        img: '2.png',
        id:2,
        sdimg:'2.png'
    },
    {
        name:'MathWallet',
        img: '3.png',
        id:3,
        sdimg:'33.png'
    }
    ,
    {
        name: 'Coinbase',
        img: '4.png',
        id:4,
        sdimg:'4.png'
    }
    ,
    {
        name: 'Enjin',
        img: '5.png',
        id:5,
        sdimg:'5.png'
    }    
] 

function Wallet(propss) {
    function Linkas(props){
        return(
            <div className= {propss.Darkmode ? 'notWalletitem' : 'Walletitem'}>
                <img src={props.img}/>
                <h3>{props.childern}</h3>
            </div>
        )
    }
    const align = list.map(function(lista){
        return <Linkas img={propss.Darkmode ? lista.sdimg : lista.img} childern={lista.name} key={lista.id}/>
      
      });
  return (
    <section id='Wallet'>
        <h1 className={propss.Darkmode ? 'noth' : 'h'}>Supported Wallet</h1>
        <div className='Wallet'>
        {align}
        </div>
        
    </section>
  );
}

export default Wallet;