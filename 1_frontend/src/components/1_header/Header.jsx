import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/finlogo.png';
import Call from '../../images/call.png';
import { StyledHeader, NavbarRight, FirstP, SecondP } from './Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={Logo} alt='100' />
      </div>
      <NavbarRight>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
        <div>
          <img src={Call} alt='' />
          <div>
            <FirstP>Road Assitance</FirstP>
            <SecondP>1800 265 28 52</SecondP>
          </div>
        </div>
      </NavbarRight>
    </StyledHeader>
  );
};

export default Header;
