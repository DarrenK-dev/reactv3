import { createSlice } from '@reduxjs/toolkit';

export const symbolSlice = createSlice({
  name: 'symbols',
  initialState: {
    symbols: [],
  },

  reducers: {
    
    addSymbol: (state, action) => {
      // check if symbol already exists
      if (state.symbols.includes(action.payload)) {
        return;
      } else {
        state.symbols.push(action.payload);
      }
    },
    
    removeSymbol: (state, action) => {
      // check if symbol exists
      if (state.symbols.includes(action.payload)) {
        state.symbols = state.symbols.filter((symbol) => symbol !== action.payload);
      } else {
        return;
      }
    }

  }
});

// export all actions to be passed to dispatch in components
export const { addSymbol, removeSymbol } = symbolSlice.actions;

// export reducer to be used in combined reducers
export default symbolSlice.reducer;