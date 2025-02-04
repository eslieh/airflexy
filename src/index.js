import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/auth';
import Home from './pages';
import Homes from './pages/home';
import Wishlists from './pages/wishlists'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Router>
      <Routes>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlists' element={<Wishlists/>}/>
        <Route path='/home' element={<Homes/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
