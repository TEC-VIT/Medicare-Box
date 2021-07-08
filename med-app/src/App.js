import React, { Component } from 'react';
import './App.css';

import firebase from './firebase.js';
import Home from './MainPage/home.js';
import Name from './NewMedicine/Page1/name';
import Login from "./MainPage/login"
import Signup from "./MainPage/signup"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Authentication/authContext';

const App= () =>{
  return(
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/newname' component={Name} />
          <Route exact path='/Signup' component={Signup} /> 
          <Route exact path='/Login' component={Login} /> 
        </Switch>
      </AuthProvider>
    </Router>
    
  )
}

export default App;

// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       currentItem: '',
//       username: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//     console.log('change');
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const itemsRef = firebase.database().ref('items');
//     const item = {
//       title: this.state.currentItem,
//       user: this.state.username
//     }
//     console.log('submit pre push');
//     itemsRef.push(item);
//     console.log('submit post push');
//     this.setState({
//       currentItem: '',
//       username: ''
//     });
//     console.log('submit done');
//   }

//   render() {
//     return (
//       <div className='app'>
//         <header>
//             <div className='wrapper'>
//               <h1>Fun Food Friends</h1>
              
//             </div>
//         </header>
//         <div className='container'>
//           <section className="add-item">
//             <form onSubmit={this.handleSubmit}>
//               <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
//               <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
//               <button>Add Item</button>
//             </form>
//           </section>
//           <section className='display-item'>
//             <div className='wrapper'>
//               <ul>
//               </ul>
//             </div>
//           </section>
//         </div>
//       </div>
//     );
//   }
// }

