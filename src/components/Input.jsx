import React from 'react';
import styled from 'styled-components';

let InputComponent = styled.input`
  width: 416px;
  height: 36px;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1rem;
`;

const Input = ({ label, id, tp, ...props }) => {
  const [form, setForm] = React.useState('');

  function handleChange(e) {
    setForm(e.target.value);
  }

  return (
    <>
      <label htmlFor={id}>{label ?? 'Digite seu email'}</label>
      <InputComponent type={tp} id={id} value={form} onChange={handleChange} />
    </>
  );
};

export default Input;
