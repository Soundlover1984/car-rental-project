import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  background-color: var(--button-color);
  color: var(--invert-color);
  transition: background-color 250ms ease-in-out;
  border-radius: 12px;
  border: none;
  padding: 12px 44px;
  margin-top: 90px;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: var(--button-hover);
  }
`;