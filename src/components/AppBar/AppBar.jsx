import { Header, Logo, LogoImg } from './AppBar.styled';
import carLogo from '../../assets/rent-car-logo.png';
import { useMediaQuery } from 'react-responsive';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import Navigation from 'components/Navigation/Navigation';


const AppBar = () => {
   const isMobile = useMediaQuery({
     query: '(max-width: 768px)',
   });
  return (
    <Header>
      <Logo to="/">
        <LogoImg src={carLogo} alt="logo" width="200" height="80" />
      </Logo>
      {isMobile ? <MobileMenu /> : <Navigation />}
    </Header>
  );
};

export default AppBar;