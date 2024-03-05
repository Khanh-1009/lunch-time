import React from 'react';
// import './App.css';
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from '../user';
import Header from './Header';
import Home from './Home'
import Us from './Us'
import Login from './Login'
import Signup from './Signup'
import { RestaurantProvider } from '../restaurants';
import Menu from './Menu';
import RestaurantProfile from './RestaurantProfile';


function App() {
  return (
    <div>
      <UserProvider>
      <RestaurantProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurants/:id' element={<Menu />} />
        <Route path='/restaurant/:id' element={<RestaurantProfile />} />
        <Route path='/about-us' element={<Us />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      </RestaurantProvider>
      </UserProvider>
    </div>
  );
}

export default App;
