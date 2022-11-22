import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import img from './assets/img/background.jpg';
import Form from './components/Form';
import CSS from '../src/App.css';
import Login from './pages/Login';

let Gradiente = styled.div`
  background: linear-gradient(#010f1a, #072135);
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

let Background = styled.img`
  background: rgba(0, 0, 0, 0.2) url(${img}) no-repeat;
  background-size: cover;
  background-blend-mode: darken;
  height: 100vh;
  width: 50%;
`;

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Background />
        <Gradiente>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Gradiente>
      </div>
    </BrowserRouter>
  );
}

export default App;
