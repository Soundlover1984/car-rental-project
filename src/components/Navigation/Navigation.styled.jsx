import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navi = styled.nav`
  display: flex;
  gap: 50px;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  :hover {
    color: var(--button-color);
    font-weight: 500;
  }

  &.active {
    color: var(--button-color);
  }
`;