import { AiOutlineArrowUp } from "react-icons/ai"; 
import './backtotop.css'
function Backtotop(props){
    return(
        <>
        <a href={props.Darkmode ? '#notApp' : '#App'} className={props.Darkmode ? 'notbacktotop' : 'backtotop'}>
            <span><AiOutlineArrowUp /></span></a>
        </>
    )
}
export default Backtotop;