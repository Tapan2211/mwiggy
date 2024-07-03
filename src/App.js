import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Features from './components/Home/Features';  
import FoodList from './components/FoodList/FoodList';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Pricing from './components/Pricing/Pricing';
import Disabled from './components/Disabled/Disabled';
import City from './Pages/City/City';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/register' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Features' element={<City />} />
            <Route path='/Price' element={<Pricing />} />
            <Route path='/Disabled' element={<Disabled />} />
            <Route path='/Foodlist/:categoryName' element={<FoodList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

