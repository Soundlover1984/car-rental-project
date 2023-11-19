import styled from 'styled-components';

export const FooterStyle = styled.footer`
  text-align: center;
  padding: 20px;
  padding-left: 120px;
  margin-top: 100px;
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