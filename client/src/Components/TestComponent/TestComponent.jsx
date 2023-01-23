import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { addSymbol, removeSymbol } from '../../redux/symbols';

const StyledTestComponent = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: aliceblue;
`

const TestComponent = () => {

  const {symbols} = useSelector((state) => state.symbols);
  const dispatch = useDispatch();

  return (
    <StyledTestComponent>
      <h1>Test Component</h1>

      {
        symbols.map((symbol) => (
          <p key={symbol}>{symbol}</p>
        ))
      }

      <button onClick={() => dispatch(addSymbol('BTCUSDT'))}>Add BTCUSDT</button>
      <button onClick={() => dispatch(removeSymbol('BTCUSDT'))}>Remove BTCUSDT</button>
    </StyledTestComponent>
  )
}

export default TestComponent