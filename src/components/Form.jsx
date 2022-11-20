import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

let FormContainer = styled.form`
  width: 500px;
  height: 500px;
  background: #010f1a;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-shadow: 0 0 6px 0 #f89427;
`;

const Form = ({ h1, ...props }) => {
  return (
    <>
      <FormContainer>
        <h1 style={{ textAlign: 'center', fontWeight: 700 }}>
          {h1 ?? 'LOGIN'}
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Input id="email" tp="email" />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            paddingTop: 25,
          }}
        >
          <Input
            id="password"
            tp="password"
            label="Digite sua senha"
            minlength="8"
            required
          />
        </div>
        <div style={{ display: 'flex', gap: 162, paddingTop: 20 }}>
          <a href="/">Esqueceu a senha?</a>
          <a href="/">Criar Conta</a>
        </div>
        <div style={{ paddingTop: 20 }}>
          <Button />
        </div>
      </FormContainer>
    </>
  );
};

export default Form;
