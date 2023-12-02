import styled from 'styled-components';

export const Button = styled.button`
  color: var(--button-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background-color: transparent;
  border: none;
  transition: color 500ms ease-in-out;
  :hover {
    color: var(--button-hover);
  }
  cursor: pointer;
`;