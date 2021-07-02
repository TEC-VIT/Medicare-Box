import './home.css'
import {BiPlusMedical} from "react-icons/bi";

const Home=() =>{
    return(
        <div className="home">
            Home Page
            <div className="add-med">
                <BiPlusMedical className="add-icon" />
            </div>
        </div>
    )
}

export default Home