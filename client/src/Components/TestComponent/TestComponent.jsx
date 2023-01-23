import React from 'react'
import {useSelector, useDispatch} from 'react-redux'


const TestComponent = () => {
  const dispatch = useDispatch()
  const {symbols} = useSelector(state => state.addSymbol.symbols)


  const addSymbol = (symbol) => {
    console.log('addSymbol', symbol)
    dispatch({type: 'ADD_SYMBOL', payload: symbol})
  }

  const removeSymbol = (symbol) => {
    console.log('removeSymbol', symbol)
    dispatch({type: 'REMOVE_SYMBOL', payload: symbol})
  }


  return (
    <>
      <div>TestComponent</div>
      <button onClick={() => addSymbol('btcusdt')}>Add BTCUSDT</button>
      <button onClick={() => removeSymbol('btcusdt')}>Remove BTCUSDT</button>
      {
        symbols && symbols.map((symbol, index) => {
          return (
            <div key={index}>{symbol}</div>
          )
        }
        )
      }
    </>
  )
}

export default TestComponent