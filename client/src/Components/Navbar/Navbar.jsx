import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;
`;

const Nav = styled.nav`
  display: flex;
  margin-right: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 1.6em;
  color: #FDB813;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  padding: 2px 4px;

  &:hover {
    color: #FDB813;
    box-shadow: 0 0 0 2px #FDB813;
    border-radius: 0.2px;
    background-color: #FDB813;
    color: #181818;
    transition: all 0.2s ease-in-out;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavItem to='/'>Home</NavItem>
      <NavItem to='/about'>About</NavItem>
      <NavItem to='/dashboard'>Dashboard</NavItem>
    </Nav>
  )
}

export default Navbar;