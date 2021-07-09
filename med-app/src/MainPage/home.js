import './home.css'
import {GoPlus} from "react-icons/go";
import { Link } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";

const data=[]

const Home=() =>{
    return(
        <div className="home">
            <Link to='/newname'>
                <div className="add-med" onClick=''>
                    <GoPlus className="add-icon" />
                </div>
            </Link>
            <div className='top-row'>
                <MdAccountCircle className="acc-icon" />
                <div className='heading'>
                    Hey Yash!
                </div>
            </div>
            <div className='card'>
                <div className='comp-name'>Compartment 1</div>
                <div className='content'>
                    <div className='details'>
                        <div className='med-name'>Medicine: <b>Remdesivir</b></div>
                        <div className='repeat'><i>Repeats daily, twice a day</i></div>
                        <div className='remain'>Pills left: <b>15</b></div>
                        <div className='refill'>Refill before: <b>10th July, 2021</b></div>
                    </div>
                    <div className='options'>
                        <div className='edit'>Edit</div>
                        <div className='refill-button'>Refill</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home