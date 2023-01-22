import React from 'react'
import styled from 'styled-components';
import HeroImage from './hero.jpg';

const HeroImg = styled.img`
  margin-top: 60px;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Overlay = styled.div`
  margin-top: 60px;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, ${props => props.opacity || 0.5});
`;


const Home = () => {
  return (
    <>
      <HeroImg src={HeroImage} alt="Laptop with stocks chart." />
      <Overlay opacity={0.6}/>
    </>
  )
}

export default Home