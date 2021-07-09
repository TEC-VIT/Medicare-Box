import './freq.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FiX } from "react-icons/fi";
import firebase from 'firebase';
import { GoChevronRight } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const Freq=() =>{

    const { useState, useEffect } = React;

    const data = [{id: 0, label: "Once daily"}, {id: 1, label: "Twice daily"}, {id: 2, label: "Thrice daily"}, {id: 3, label: "Every 6 hours"}, {id: 4, label: "Only as needed"}, {id: 5, label: "Other"}];
    
    const [isOpen, setOpen] = useState(false);
      const [items, setItem] = useState(data);
      const [selectedItem, setSelectedItem] = useState(null);
      
      const toggleDropdown = () => setOpen(!isOpen);
      
      const handleItemClick = (id) => {
        selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
      }
    

    return(
        <div className="freq">
            <Link to='/'>
                <div className="close-page" onClick=''>
                    < FiX className="close-icon" />
                </div>
            </Link>

            <div className="title">
            Add New Medicine
            </div>
            
            <div className="card">
                <div className="input-t">
                How often do you take the medicine?
                </div>
                
                
                <div className="dropdown">
                    <div className='dropdown-header' onClick={toggleDropdown}>
                        {selectedItem ? items.find(item => item.id === selectedItem).label : "Select your answer"}
                        {/* < IoIosArrowForward className={`icon ${isOpen && "open"}`}"icon" /> */}
                        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
                    </div>
                    <div className={`dropdown-body ${isOpen && 'open'}`}>
                        {items.map(item => (
                        <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                            <span className={`dropdown-item-dot ${item.id === selectedItem && 'selected'}`}>• </span>
                            {item.label}   
                        </div>
                    ))}
                    </div>
                </div>

            </div>
            
            
            <Link to='/daysec'>
                <div className="next-page" onClick=''>
                    < GoChevronRight className="next-page-icon" />
                </div>
            </Link>
        </div>
    )
}

export default Freq