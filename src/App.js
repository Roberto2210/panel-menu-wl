import React, { Component,useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './App.css';
import fire from './Fire';
import Home from './Home';
import Login from './Login';



// function  App() {

//   const [celular, setCelular] = useState([])

//   useEffect(() => {
//     axios.get('http://localhost:3800/api/v1/users')
//       .then((result) => { 
//         console.log(result.data);
//         setCelular(result.data)
//       }).catch((err) => {
//         console.log(err);    
//       });
//   }, []);

//     const render = () => {
//       if (celular === 0) {
//         return <h1>Cagando...</h1>
//       }else {
//       const listVenderCelalar =  celular.map((celular) => {
//           return <Home Tacos_de_res = {celular.Taco_de_res}/>
          
//         });
//         return listVenderCelalar
//       }
//     }

   


  
//   return (
//     <div className="App">
//       <Home/>
//     {render()}
//     </div>
//   );
// }


// export default App;


class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }

    });
  }

  

  
  render() {
    return (
     <div className="App">
       {this.state.user ?  ( <Home/>) : (<Login />)}
       
       </div>
    );
}
}

 export default App;