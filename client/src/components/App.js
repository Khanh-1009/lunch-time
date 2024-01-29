import React from 'react';
// import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './Header';
import Home from './Home'
import Us from './Us'
import Login from './Login'
import Signup from './Signup'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<Us />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
