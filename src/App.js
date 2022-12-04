import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import New from './pages/New';
import Reset from './pages/Reset';
import '../src/App.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <div className="containerImg"></div>
        <div className="gradienteDiv">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/new" element={<New />} />
            <Route path="/reset" element={<Reset />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
