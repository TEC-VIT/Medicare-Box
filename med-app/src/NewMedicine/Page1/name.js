import './name.css'
import { Link } from 'react-router-dom';

import { FiX } from "react-icons/fi";

import firebase from 'firebase';
import { GoChevronRight } from "react-icons/go";

const Name=() =>{

    // constructor()
    // {
    //     // super();
    //     this.state = {
         
    //       medname: ''
    //     }
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    //   handleChange(e) 
    //   {
    //         this.setState({
    //           [e.target.name]: e.target.value
    //         });
            
    // }
        
    //       handleSubmit(e) 
    //       {
    //         e.preventDefault();
    //         const itemsRef = firebase.database().ref('medicine');
    //         const i = {
              
    //           med: this.state.medname
    //         }
            
    //         itemsRef.push(medicine);
            
    //         this.setState({
              
    //           medname: ''
    //         });
            
    //       }
    return(
        <div className="name">
            <Link to='/'>
                <div className="close-page" onClick=''>
                    < FiX className="close-icon" />
                </div>
            </Link>

            <div className="title">
            Add New Medicine
            </div>
            
            <div className="add-med-card">
                <div className="input-t">
                Name of the Medicine
                </div>
                {/* <form onSubmit={this.handleSubmit}>
                <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
                </form>               */}

                <div className="input-box"></div>
            </div>
            
            
            <Link to='/daily'>
                <div className="next-page" onClick=''>
                    < GoChevronRight className="next-page-icon" />
                </div>
            </Link>
        </div>
    )
}

export default Name