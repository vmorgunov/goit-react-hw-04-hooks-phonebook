import styled from '@emotion/styled';

export const Form = styled.form`
  margin-left: 10px;
  margin-bottom: 10px;
  border: solid 1px black;
  padding: 15px;
  width: 300px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  display: flex;
  margin: 10px 0;
`;

export const Button = styled.button`
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #bcb7b7;
  }
`;
