import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Aside = styled.aside`
  padding: 20px;
  width: 200px;
  position: fixed;
`;

export const Logo = styled.p`
  margin: 0;
  text-transform: uppercase;
  color: #0b5cc7;
  font-size: 40px;
  text-shadow: 0 1px 3px #6566c6, 0 2px 3px #7387e6, 0 3px 3px #8ca0d3,
    0 4px 3px #bec6e9, 0 5px 3px #a9a6a6;
  margin-bottom: 30px;
`;

export const Navi = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 30px;
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
  width: 100%;
  max-height: 100%;
`;