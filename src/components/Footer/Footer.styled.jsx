import styled from 'styled-components';

export const FooterStyle = styled.footer`
  text-align: center;
  padding: 20px;
  margin-top: 60px;
`;

export const Link = styled.a`
  position: relative;
  font-size: 16px;
  color: var(--primary-color);
  transition: color 500ms ease-in-out;
  &:hover {
  color: var(--button-color);
  }
`;