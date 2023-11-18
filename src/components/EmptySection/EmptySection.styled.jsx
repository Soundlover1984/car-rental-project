import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Button = styled(NavLink)`
  background-color: var(--button-color);
  color: var(--invert-color);
  transition: background-color 250ms ease-in-out;
  border-radius: 12px;
  border: none;
  padding: 12px 44px;

  margin-top: 28px;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: var(--button-hover);
  }
`;