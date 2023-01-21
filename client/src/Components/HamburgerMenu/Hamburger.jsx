import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar, {NavItem} from '../Navbar/Navbar';
import logo from '../../logo.svg';

const _width = 768;


const Hamburger = styled.div`
  /* styles for the hamburger menu button */
  width: 40px;
  height: 40px;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerLine = styled.div`
  /* styles for the individual lines of the hamburger menu button */
  width: 100%;
  height: 2px;
  background-color: #FDB813;
  margin: 8px 0px;
  transition: all 0.2s ease;
  &.open {
    transform: rotate(45deg) translate(5px, 5px);
  }
`;

const MobileMenu = styled.div`
  /* styles for the mobile menu */
  width: 100%;
  /* height: 90%; */
  position: fixed;
  top: 0;
  left: 0;
  background-color: #333;
  z-index: 999;
  /* transform: translateX(-100%); */
  transform: translateX(-100%);
  transition: all 0.3s ease;
  &.open {
    transform: translateX(0);
  }
`;

const MobileMenuItem = styled.div`
  /* styles for the mobile menu items */
  padding: 10px;
  text-align: center;
`;

const HamburgerLinkContainer = styled.div`
  /* styles for the mobile menu nav */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
  @media (min-width: 769px) {
    display: none;
  }
`;

const HamburgerLink = styled(Link)`
  /* styles for the mobile menu nav */
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 200px;
  border: 1px solid #FDB813;
  color: #FDB813;
  box-sizing: border-box;
  padding: 10px;
  background-color: #333;
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  height: 50px;
  @media (min-width: 769px) {
    display: none;
  }
  &:hover {
    color: #FDB813;
    box-shadow: 0 0 0 2px #FDB813;
    border-radius: 0.2px;
    background-color: #FDB813;
    color: #181818;
    transition: all 0.2s ease-in-out;
  }
`;

const Logo = styled.img`
  /* styles for the mobile menu nav */
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 100%;
  color: #FDB813;
  box-sizing: border-box;
  background-color: #333;
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  height: 30px;
  margin: 30px;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Spacer = styled.div`
height: 50px;
`;

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Hamburger onClick={handleClick}>
        <HamburgerLine className={isOpen ? 'open' : ''} />
        <HamburgerLine className={isOpen ? 'open' : ''} />
        <HamburgerLine className={isOpen ? 'open' : ''} />
      </Hamburger>
      <MobileMenu className={isOpen ? 'open' : ''}>
        <HamburgerLinkContainer>
          <Logo src={logo} alt="logo" />
          <HamburgerLink onClick={handleClick} to='/'>Home</HamburgerLink>
          <HamburgerLink onClick={handleClick} to='/about'>About</HamburgerLink>
          <HamburgerLink onClick={handleClick} to='/dashboard'>Dashboard</HamburgerLink>
          <Spacer/>
          <HamburgerLink onClick={handleClick}>Close Menu</HamburgerLink>
          <Spacer/>
        </HamburgerLinkContainer>
          
      </MobileMenu>
    </>
  );
};

export default HamburgerMenu;
