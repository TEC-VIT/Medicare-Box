import './home.css'
import {GoPlus} from "react-icons/go";
import { Link } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";

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
        </div>
    )
}

export default Home