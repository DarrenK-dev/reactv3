// remove symbol reducer
const removeSymbol = (state = {symbols: []}, action) => {
  switch (action.type) {
    case 'REMOVE_SYMBOL':
      // check if symbol exists
      if (!state.symbols.includes(action.payload)) {
        return state
      }
      return {
        ...state,
        symbols: state.symbols.filter(symbol => symbol !== action.payload)
      }
    default:
      return state
  }
}

export default removeSymbol