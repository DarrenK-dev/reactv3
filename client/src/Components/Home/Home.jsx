import React from 'react'
import styled from 'styled-components';
import HeroImage from './hero.jpg';
import { useSelector, useDispatch } from 'react-redux';

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

  const prices = useSelector(state => state.updatePrice.prices);
  const dispatch = useDispatch();

  return (
    <>
      
        <p>BTC price = {prices.BTC}</p>
        <p>ETH price = {prices.ETH}</p>
        <button onClick={() => dispatch({type: 'UPDATE_PRICE', symbol: 'BTC', price: 100})}>Add 100 BTC</button>
      
      {/* <HeroImg src={HeroImage} alt="Laptop with stocks chart." />
      <Overlay opacity={0.6}/> */}
    </>
  )
}

export default Home