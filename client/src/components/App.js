import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { RestaurantProvider } from '../restaurants';
import Header from './Header';
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Menu from './Menu';
import RestaurantProfile from './RestaurantProfile';
import FeedBackForm from './FeedBackForm';
import Profile from './Profile';
import Cart from './Cart';


function App() {
  return (
    <div>
      <RestaurantProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurants/:id' element={<Menu />} />
        <Route path='/restaurant/:id' element={<RestaurantProfile />} />
        <Route path='/profile' element={<Profile />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/feedback' element={<FeedBackForm/>} /> 
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </RestaurantProvider>
    </div>
  );
}

export default App;
