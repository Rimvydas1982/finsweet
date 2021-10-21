import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledFooter,
  FooterBottom,
  FooterTop,
  FooterTopLeft,
  FooterTopRight,
  FirstP,
  SecondP,
} from './Footer.style';

import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import FinSweet from '../../images/SVG/FinSweet';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterTop>
        <FooterTopLeft>
          <h3>Get in touch with us for your service</h3>
          <div>
            <p>
              <BsFacebook size={28} />
            </p>
            <p>
              <FaTwitter size={28} />
            </p>
            <p>
              <BsInstagram size={28} />
            </p>
            <p>
              <BsLinkedin size={28} />
            </p>
          </div>
        </FooterTopLeft>
        <FooterTopRight>
          <div>
            <FirstP>Help line Number</FirstP>
            <SecondP>1800 256 240 52</SecondP>
          </div>
          <div>
            <FirstP>Address</FirstP>
            <SecondP>NH234 Public Square San Francisco 65368</SecondP>
          </div>
          <div>
            <FirstP>We are open</FirstP>
            <SecondP>Monday to Friday 9:00 AM to 10:00 AM</SecondP>
          </div>
        </FooterTopRight>
      </FooterTop>
      <FooterBottom>
        <div>
          <h1>
            <FinSweet />
          </h1>
          <div>
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
          </div>
          <div>
            <span>© Copyright Finsweet {new Date().getFullYear()}</span>
          </div>
        </div>
      </FooterBottom>
    </StyledFooter>
  );
};

export default Footer;
