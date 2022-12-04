import React from 'react';
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

const Form = ({ h1, id, ...props }) => {
  return (
    <>
      <FormContainer>
        <h1 style={{ textAlign: 'center', fontWeight: 700 }}>
          {h1 ?? 'Novo Usuário'}
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Input id={id} tp={id} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 10,
          }}
        >
          <Input
            id="password"
            tp="password"
            label="Digite uma senha"
            minlength="8"
            required
          />
        </div>
        <div style={{ paddingTop: 20 }}>
          <Button t="Criar Conta" />
        </div>
      </FormContainer>
    </>
  );
};

export default Form;
