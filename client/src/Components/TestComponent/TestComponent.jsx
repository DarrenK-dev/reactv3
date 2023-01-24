import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { addSymbol, removeSymbol } from '../../redux/symbols';
import SymbolSearch from '../SymbolSearch/SymbolSearch';
import Sidebar from '../Sidebar/Sidebar';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  height: 100vh;
  width: calc(100% - 200px);
  background-color: blue;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledTestComponent = styled.div`
  margin-left: 200px;
  height: 100vh;
  width: 100vw;
  background-color: aliceblue;
`

const TestComponent = () => {

  const {symbols} = useSelector((state) => state.symbols);
  const dispatch = useDispatch();

  return (
    <>  
    foo
    </>
  )
}

export default TestComponent