import React, { useState } from 'react';
import styled from 'styled-components';

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
  margin: 6px 0;
  transition: all 0.2s ease;
  &.open {
    transform: rotate(45deg) translate(5px, 5px);
  }
`;

const MobileMenu = styled.div`
  /* styles for the mobile menu */
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 999;
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
        <MobileMenuItem>Menu item 1</MobileMenuItem>
        <MobileMenuItem>Menu item 2</MobileMenuItem>
        <MobileMenuItem>Menu item 3</MobileMenuItem>
      </MobileMenu>
    </>
  );
};

export default HamburgerMenu;
