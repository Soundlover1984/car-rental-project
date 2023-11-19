
import { Aside, Logo, Link, Navi, LogoImg } from './AppBar.styled';
import carLogo from '../../assets/rent-car-logo.png';
import ContactButton from 'components/ContactButton/ContactButton';

const AppBar = () => {
  return (
    <Aside>
      <Logo to="/">
          <LogoImg src={carLogo} alt="logo" width="290" height="145"  />
        </Logo>
      <Navi>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </Navi>
      <ContactButton text="Contact us" />
    </Aside>
  );
};

export default AppBar;