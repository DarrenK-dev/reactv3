import { createSlice } from '@reduxjs/toolkit';

export const symbolSlice = createSlice({
  name: 'symbols',
  initialState: {
    symbols: [
      {
        'name': 'ETHUSDT',
        'price': 0,
      }
    ],
  },

  reducers: {
    
    addSymbol: (state, action) => {
      // check if symbol exists
      if (state.symbols.some(symbol => symbol.name === action.payload.name)) {
        // if symbol exists, return
        return;
      } else {
        // if symbol doesn't exist, add it
        if (!action.payload.price) {
          // if price is not provided, set to 0
          action.payload.price = 0;
        }
        // add symbol to state
        state.symbols.push(action.payload);
      }
    },
    
    removeSymbol: (state, action) => {
      if (typeof action.payload === 'string') {
        // check if symbol exists
        if (state.symbols.some(symbol => symbol.name === action.payload)) {
          // filter out symbol
          state.symbols = state.symbols.filter((symbol) => symbol.name !== action.payload);
        } else {
          // if symbol doesn't exist, return
          return;
        }
      } else if (typeof action.payload === 'object') {
        // check if symbol exists
        if (state.symbols.some(symbol => symbol.name === action.payload.name)) {
          // filter out symbol
          state.symbols = state.symbols.filter((symbol) => symbol.name !== action.payload.name);
        } else {
          // if symbol doesn't exist, return
          return;
        }
      }
    }

  }
});

// export all actions to be passed to dispatch in components
export const { addSymbol, removeSymbol } = symbolSlice.actions;

// export reducer to be used in combined reducers
export default symbolSlice.reducer;