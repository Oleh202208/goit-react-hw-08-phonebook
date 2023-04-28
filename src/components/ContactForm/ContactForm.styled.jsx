import styled from 'styled-components';

export const Form = styled.form`
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 200px;
`;

export const Button = styled.button`
  display: block;
  width: 95px;
  margin: 0;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #4caf50;
  }
`;
