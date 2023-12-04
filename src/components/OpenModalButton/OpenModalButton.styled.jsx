import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--button-color);
  font-weight: 600;
  font-size: 14px;
  color: var(--invert-color);
  transition: background-color 500ms ease-in-out;
  width: 100%;
  border-radius: 12px;
  border: none;
  padding: 12px 0;
  margin-top: 28px;
  cursor: pointer;
  &:hover {
    background-color: var(--button-hover);
  }
`;