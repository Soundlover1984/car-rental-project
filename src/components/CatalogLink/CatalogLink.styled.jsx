import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { max, tablet } from 'styles/mediaSizes';

export const Button = styled(NavLink)`
  background-color: var(--button-color);
  color: var(--invert-color);
  transition: background-color 500ms ease-in-out;
  border-radius: 12px;
  border: none;
  padding: 12px 44px;
  margin-top: 90px;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: var(--button-hover);
  }
  ${max(tablet)} {
    width: 100%;
    padding: 18px 44px;
  }
`;