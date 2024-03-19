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
import FeedBackForm from './FeedBackForm';
import Profile from './Profile';


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
        <Route path='/profile' element={<Profile />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/feedback' element={<FeedBackForm/>} /> 
      </Routes>
      </RestaurantProvider>
      </UserProvider>
    </div>
  );
}

export default App;
