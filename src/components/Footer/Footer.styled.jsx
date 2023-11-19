import styled from 'styled-components';

export const FooterStyle = styled.footer`
  text-align: center;
  padding: 20px;
  margin-top: 140px;
  margin-left: 160px;
`;

export const Link = styled.a`
  position: relative;
  font-size: 16px;
  color: var(--primary-color);
  transition: color 250ms ease-in-out;
  &:hover {
  color: var(--button-color);
  }
`;