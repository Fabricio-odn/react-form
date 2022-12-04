import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';

let FormContainer = styled.form`
  width: auto;
  height: auto;
  background: #010f1a;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  box-shadow: 0 0 6px 0 #f89427;

  @media (max-width: 600px) {
    padding: 20px;
    font-size: 0.9rem;
  }
`;

let Links = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15px;
  gap: 170px;

  @media (max-width: 1440px) {
    gap: 130px;
  }

  @media (max-width: 600px) {
    gap: 80px;
    padding-top: 10px;
  }
`;

const Form = ({ h1, id, ...props }) => {
  return (
    <div style={{ padding: 20 }}>
      <FormContainer>
        <h1 style={{ textAlign: 'center', fontWeight: 700 }}>
          {h1 ?? 'Conta de usuário'}
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Input id={id} tp={id} width="" />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            paddingTop: 10,
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
        <Links>
          <Link to="./reset">Esqueceu a senha?</Link>
          <Link to="./new">Criar Conta</Link>
        </Links>
        <div style={{ paddingTop: 10 }}>
          <Button t="Logar na Conta" />
        </div>
      </FormContainer>
    </div>
  );
};

export default Form;
