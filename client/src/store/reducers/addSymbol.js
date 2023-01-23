//add symbol reducer
const addSymbol = (state = {symbols: []}, action) => {
  switch (action.type) {
    case 'ADD_SYMBOL':
      // check if symbol already exists
      if (state.symbols.includes(action.payload)) {
        return state
      }
      return {
        ...state,
        symbols: [...state.symbols, action.payload]
      }
    default:
      return state
  }
}

export default addSymbol