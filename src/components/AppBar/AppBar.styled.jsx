import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid var(--separator-color);
  padding: 20px;
  margin: 0 auto;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  z-index: 999;
`;

export const Logo = styled(NavLink)`
  margin: 0;
  color: #0b5cc7;
  font-size: 40px;
  text-shadow: 0 1px 3px #6566c6, 0 2px 3px #7387e6, 0 3px 3px #8ca0d3,
    0 4px 3px #bec6e9, 0 5px 3px #a9a6a6;
 
`;
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

export const LogoImg = styled.img`
  width: 200px;
  max-height: 80px;
`;