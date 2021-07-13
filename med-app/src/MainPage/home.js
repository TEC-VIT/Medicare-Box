import './home.css'
import {GoPlus} from "react-icons/go";
import { Link, useHistory } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import React, { useState } from 'react';
import { useAuth } from "../Authentication/authContext";

const data=[
    {compartment:1, name:'Remdisivir', repeat:'Repeats daily, twice a day', pills:15, refill:'20th July, 2021'},
    {compartment:2, name:'Remdisivir', repeat:'Repeats daily, twice a day', pills:10, refill:'15th July, 2021'},
    {compartment:3, name:'Remdisivir', repeat:'Repeats daily, twice a day', pills:12, refill:'9th July, 2021'},
    {compartment:4, name:null, repeat:null, pills:null, refill:null},
    {compartment:5, name:'Remdisivir', repeat:'Repeats daily, twice a day', pills:18, refill:'12th July, 2021'},
    {compartment:6, name:null, repeat:null, pills:null, refill:null},
]

const Home=() =>{
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try{
            await logout()
            history.pushState('/Login')
        } catch {
            setError('Failed to logout')
        }
    }

    return(
        <div className="home">
            {/* <Link to='/newname'>
                <div className="add-med" onClick=''>
                    <GoPlus className="add-icon" />
                </div>
            </Link> */}
            <div className='top-row'>
                <MdAccountCircle className="acc-icon" />
                <div className='heading'>
                    Hey Yash!
                </div>
                <div>
                    <strong>Email: </strong> {currentUser.email}
                    <br></br>
                    <Link to="/UpdateProfile">Update Profile</Link>
                    <br></br>
                    <button onClick={handleLogout}>
                        Log Out
                    </button>
                </div>
            </div>
            {data.map((item)=>{
                return(
                    <div className='home-card'>
                        <div className='comp-name'>Compartment {item.compartment}</div>
                        <div className='content'>
                            <div className='details'>
                                <div>Medicine: <b>{item.name}</b></div>
                                <div><i>{item.repeat}</i></div>
                                <div>Pills left: <b>{item.pills}</b></div>
                                <div>Refill before: <b>{item.refill}</b></div>
                            </div>
                            {item.name!=null?(
                                <div className='options'>
                                    <div className='edit'>Edit</div>
                                    <div className='refill-button'>Refill</div>
                                </div>
                            ):(
                                <Link to='/newname'>
                                    <div className="add-med" onClick=''>
                                        <GoPlus className="add-icon" />
                                    </div>
                                </Link>
                            )}
                            
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home