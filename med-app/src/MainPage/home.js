import './home.css'
import {GoPlus} from "react-icons/go";
import { Link } from 'react-router-dom';

const Home=() =>{
    return(
        <div className="home">
            Home Page
            <Link to='/newname'>
                <div className="add-med" onClick=''>
                    <GoPlus className="add-icon" />
                </div>
            </Link>
        </div>
    )
}

export default Home