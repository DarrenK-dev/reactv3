import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { addSymbol } from '../../redux/symbols';
import SidebarSymbol from '../SidebarSymbol';

const Search = styled.input`
  display: block;
  height: 50px;
  font-size: 1rem;
  padding: 0 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 1rem 0;
`

const SymbolSearch = () => {

  const [binanceSymbols, setBinanceSymbols] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  // not sure if i should be using the symbolsSlice from binanceStore here
  const [selectedSymbols, setSelectedSymbols] = useState([]);


  useEffect(() => {
    // fetch all symbols from binance
    fetch('https://api.binance.com/api/v3/exchangeInfo')
      .then((response) => response.json())
      .then((data) => {
        // set binance symbols to local component state
        setBinanceSymbols(data.symbols);
      }
    );
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.replace(/\s/g,'').replace(/\//g,'').replace(/-/g,''))
    const results = binanceSymbols.filter(symbol => symbol.symbol.toLowerCase().includes(searchTerm.toLowerCase()) && !selectedSymbols.includes(symbol.symbol));
    setSearchResults(results);
  }

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults])

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  return (
    <>
    <Search
      // id='search'
      ref={inputRef}
      type="text" 
      placeholder="Search for a symbol" 
      value={searchTerm} 
      onChange={handleSearch}
    />

  
    <ul>
      {
        searchResults.map((symbol) => (
          <SidebarSymbol key={symbol.symbol}>
            {symbol.symbol}
            <button
              onClick={() => {
                dispatch(addSymbol({name:symbol.symbol, price:0}));
                setSearchTerm(''); 
                setSearchResults([]);
                inputRef.current.focus();
              }}
            >
                Add
            </button>
          </SidebarSymbol>
        ))
      }
    </ul>
    </>


  )
}

export default SymbolSearch