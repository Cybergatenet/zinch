import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './assets/css/bootstrap.min.css'
// import './App.css';
import Home from './pages/Home/Home';
import ErrorPage from './pages/Error/ErrorPage';
import Slide from './components/Sliders/Slide'
import Login from './pages/Login/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/slide" element={<Slide />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/account" element={<CreateAccount />} /> */}

        {/* 
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin/>} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<Fundraisedetails />} />
        <Route path="/passwordreset" element={<Fundraisedetails />} />*/}

        <Route path="*" element={<ErrorPage/>} /> 
        <Route path="/auth/login" element={<ErrorPage/>} /> 
      </Routes>   
    </BrowserRouter>             
  );
}

export default App;

