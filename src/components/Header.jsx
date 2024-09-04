import { NavLink } from 'react-router-dom';
import Logo from "../assets/wealth-health.png";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); 
  return (
    <nav className="hr-header">
        <NavLink to="/" className="hr-header__logo">
            <img src={Logo} alt="Wealth Health" />
            {/* <span>HRnet</span> */}
        </NavLink>
        
        {location.pathname === '/list' ? (
        <NavLink to="/" className="hr-header__item">
            Back
        </NavLink>) : (<NavLink to="/list" className="hr-header__item">
            View Employee List
        </NavLink>)}
    </nav>
  );
};

export default Header;
