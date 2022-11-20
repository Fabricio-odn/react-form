import React from 'react';
import styled from 'styled-components';
import img from '../assets/img/background.jpg';
import Form from '../components/Form';

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

const Login = () => {
  return (
    <div style={{ display: 'flex', maxWidth: 1440, maxHeight: 1024 }}>
      <Background />
      <Gradiente>
        <Form />
      </Gradiente>
    </div>
  );
};

export default Login;
