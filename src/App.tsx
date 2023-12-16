import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="bg-[#EEE2DE] h-screen">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
