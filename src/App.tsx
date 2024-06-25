import React from 'react';
import logo from './logo.svg';
import './App.css';
import './common/header';
import Sidebar from './common/sidebar';
import Header from './common/header';
import Dashboard from './pages/dashboard';


function App() {
  return (
    <div className="appMainWrapper">
     <Dashboard/>
    </div>
  );
}

export default App;
