import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Map from './components/Map/Map'
import Register from './components/Register/Register'
import { useState } from 'react'
import Login from './components/Login/Login'
import NearMe from '@mui/icons-material/NearMe'

const App = () => {
  const myStorage = window.localStorage;
  const [currentUser,setCurrentUser] = useState(myStorage.getItem('user'));
  const [showRegister , setShowRegister] = useState(false);
  const [showLogin , setShowLogin] = useState(false);


  return (
    <div className='container'>
      <Navbar currentUser={currentUser} setShowLogin={setShowLogin} setShowRegister={setShowRegister} myStorage={myStorage}  setCurrentUser={setCurrentUser}/>
      <Map currentUser={currentUser}/>
      {showRegister && <Register setShowRegister={setShowRegister}/>}
      {showLogin && <Login setShowLogin={setShowLogin} myStorage={myStorage}  setCurrentUser={setCurrentUser}/>}
      
    </div>
  )
}

export default App