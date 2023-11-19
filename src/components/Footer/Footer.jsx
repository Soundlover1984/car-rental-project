import { FooterStyle, Link } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyle>
      <span> © 2023 All rights reserved | </span>
      <Link
        href="https://github.com/soundlover1984"
        target="_blank"
        rel="noopener noreferrer"
      >
        Denys Kovtun
      </Link>
    </FooterStyle>
  );
};

export default Footer;