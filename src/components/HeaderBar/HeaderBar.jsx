import { NavLink } from 'react-router-dom';
import { Aside, Logo, Navi, LogoImg } from './HeaderBar.styled';
import carLogo from '../../assets/rent-car-logo.png';

const HeaderBar = () => {
  return (
    <Aside>
      <Logo to="/">
          <LogoImg src={carLogo} alt="logo" width="290" height="145"  />
        </Logo>
      <Navi>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </Navi>
    </Aside>
  );
};

export default HeaderBar;