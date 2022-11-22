import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

let ButtonComponent = styled.button`
  width: 415px;
  height: 49px;
  border-radius: 5px;
  background: #f89427;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1.125rem;
  color: #fff;
  cursor: pointer;
  text-shadow: 0 0 2px #000;
`;

const Button = ({ t, ...props }) => {
  const buttonSubmit = (e) => {
    e.preventDefault();
    console.log('Clicou');
  };

  return (
    <>
      <ButtonComponent onClick={buttonSubmit}>
        <Link href="/">{t ?? 'ENTRAR'}</Link>
      </ButtonComponent>
    </>
  );
};

export default Button;
