import styled from 'styled-components';
import { max, tablet } from 'styles/media';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  background-color: var(--button-color);
  color: var(--invert-color);
  transition: background-color 500ms ease-in-out;
  border-radius: 12px;
  border: none;
  padding: 12px 0px;
  text-align: center;
  display: block;
  width: 130px;
  margin-top: 50px;
  cursor: pointer;
  &:hover {
    background-color: var(--button-hover);
  }
  ${max(tablet)} {
    width: 100%;
    padding: 18px 44px;
  }
`;