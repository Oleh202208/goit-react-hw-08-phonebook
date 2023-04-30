import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  & :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ButtonDelete = styled.button`
  display: block;
  margin-bottom: 5px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #4caf50;
  }
`;
