import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

let ButtonComponent = styled.button`
  width: 425px;
  height: 49px;
  border-radius: 5px;
  background: #f89427;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1.125rem;
  color: #fff;
  cursor: pointer;
  text-shadow: 0 0 2px #000;
  border: none;

  @media (max-width: 1440px) {
    width: 380px;
    height: 45px;
  }

  @media (max-width: 600px) {
    width: 300px;
    height: 39px;
  }
`;

const Button = ({ t, ...props }) => {
  const buttonSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <ButtonComponent onClick={buttonSubmit}>
        <Link to="/">{t ?? 'ENTRAR'}</Link>
      </ButtonComponent>
    </>
  );
};

export default Button;
