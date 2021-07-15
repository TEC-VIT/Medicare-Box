import './details.css'
import { Link } from 'react-router-dom'
import { GoChevronRight } from "react-icons/go";
import { useState } from 'react';
import { useAuth } from "../Authentication/authContext";
import firebase from 'firebase';

const Details = ()=>{

    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const { currentUser } = useAuth()

    const handleSubmit = async ()=>{
        const userRef = firebase.database().ref(currentUser.uid)
        const defaultdata={
            medicine: {
            1:{compartment:1, name:null, repeat:null, pills:null, refill:null},
            2:{compartment:2, name:null, repeat:null, pills:null, refill:null},
            3:{compartment:3, name:null, repeat:null, pills:null, refill:null},
            4:{compartment:4, name:null, repeat:null, pills:null, refill:null},
            5:{compartment:5, name:null, repeat:null, pills:null, refill:null},
            6:{compartment:6, name:null, repeat:null, pills:null, refill:null},
            },
            name:name,
            number:number,
        }
        await userRef.set(defaultdata)
        console.log('done')
    }

    return(
        <div className='details'>
            <div className='details-heading'>Please Enter Additional Details</div>
            <form className='details-form'>
                <div className='details-input-head'>Your Name</div>
                <input className='details-name' type='text' placeholder='Eg - King Kong' value={name} onChange={(event)=>{setName(event.target.value)}} />
                <div className='details-input-head'>Mobile Number</div>
                <input className='details-number' type='text' placeholder='Eg- +919988776655' value={number} onChange={(event)=>{setNumber(event.target.value)}} />
                <Link to='/' onClick={handleSubmit}>
                    <div className="next-page">
                        < GoChevronRight className="next-page-icon" />
                    </div>
                </Link>
            </form>
        </div>
    )
}

export default Details