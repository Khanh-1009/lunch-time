import React from 'react';
// import './App.css';
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from '../user';
import Header from './Header';
import Home from './Home'
import Us from './Us'
import Login from './Login'
import Signup from './Signup'


function App() {
  return (
    <div>
      <UserProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<Us />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
