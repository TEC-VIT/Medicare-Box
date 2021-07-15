import './home.css'
import {GoPlus} from "react-icons/go";
import { Link, useHistory } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import React, { useState, useEffect } from 'react';
import { useAuth } from "../Authentication/authContext";
import firebase from 'firebase';

const Home=() =>{
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const [data,setData] = useState({});

    const dataRef = firebase.database().ref(currentUser.uid+'/medicine');
    useEffect(()=>{
        console.log('hello')
        dataRef.on('value',snapshot=>{
            setData(snapshot.val())
        })
    },[])
  
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
                    {/* <strong>Email: </strong> {currentUser.email} */}
                    {/* <Link to="/UpdateProfile">
                        <div className='logout-but'>Update Profile</div>
                    </Link> */}
                    <div onClick={handleLogout} className='logout-but'>Log Out</div>
                </div>
            </div>
            {Object.values(data).map((item)=>{
                return(
                    <div className='home-card'>
                        <div className='comp-name'>Compartment {item.compartment}</div>
                        <div className='content'>
                            <div className='med-details'>
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