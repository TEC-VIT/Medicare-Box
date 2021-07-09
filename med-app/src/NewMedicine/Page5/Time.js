// import './Time.css'
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
// import { FiX } from "react-icons/fi";
// import firebase from 'firebase';
// import { GoChevronRight } from "react-icons/go";
// import { IoIosArrowForward } from "react-icons/io";

// const Time=() =>{

//     const { useState } = React;
// const { render } = ReactDOM;
// const { clamp } = _;

// const {    hour,
//     minute,
//     period,
//     setHour,
//     setMinute,
//     setPeriod,
//   }

//     return(
//         <div className="time">
//             <Link to='/'>
//                 <div className="close-page" onClick=''>
//                     < FiX className="close-icon" />
//                 </div>
//             </Link>

//             <div className="title">
//             Add New Medicine
//             </div>
            
//             <div className="card">
//                 <div className="input-t">
//                 When do you need to take the first dose?
//                 </div>
                
//                 <div className="time-picker">
//       <label>Time: </label>
//       <input
//         type="number"
//         min="1"
//         max="12"
//         value={hour}
//       />
//       <span>
//         <button onClick={() => setHour(clamp(hour + 1, 1, 12))}>+</button>
//         <button onClick={() => setHour(clamp(hour - 1, 1, 12))}>-</button>
//       </span>
//       <input
//         type="number"
//         min="0"
//         max="59"
//         value={minute}
//       />
//       <span>
//         <button onClick={() => setMinute((minute + 15) % 60)}>+</button>
//       </span>
//       <select
//         value={period}
//         onChange={(event) => setPeriod(event.target.period)}
//       >
        
//       </select>
//     </div>
                
               
                

//             </div>
            
            
//             <Link to='/daysec'>
//                 <div className="next-page" onClick=''>
//                     < GoChevronRight className="next-page-icon" />
//                 </div>
//             </Link>
//         </div>
//     )
// }

// export default Time