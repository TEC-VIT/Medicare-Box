import './daily.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FiX } from "react-icons/fi";
import firebase from 'firebase';
import { GoChevronRight } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const Daily=() =>{

    const { useState, useEffect } = React;

    const data = [{id: 0, label: "Yes"}, {id: 1, label: "No"}, {id: 2, label: "Only as needed"}];
    
    const [isOpen, setOpen] = useState(false);
      const [items, setItem] = useState(data);
      const [selectedItem, setSelectedItem] = useState(null);
      
      const toggleDropdown = () => setOpen(!isOpen);
      
      const handleItemClick = (id) => {
        selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
      }
    

    return(
        <div className="daily">
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
                Do you take the medicine everyday?
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
            
            
            <Link to='/freq'>
                <div className="next-page" onClick=''>
                    < GoChevronRight className="next-page-icon" />
                </div>
            </Link>
        </div>
    )
}

export default Daily