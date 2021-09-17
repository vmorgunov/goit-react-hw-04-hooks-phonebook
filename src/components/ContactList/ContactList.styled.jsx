import styled from '@emotion/styled';

export const Titel = styled.h2`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin-bottom: 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;

export const List = styled.ul`
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
`;
