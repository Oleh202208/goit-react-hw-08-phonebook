import styled from 'styled-components';

export const RegForm = styled.form`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
`;

export const RegisterTitle = styled.h2`
  margin-bottom: 15px;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;
export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  & :focus,
  :hover {
    background-color: #0b3e10;
  }
`;
