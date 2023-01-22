const initialState = {
  prices: {
    BTC: 0,
    ETH: 0
  }
};

const updatePrice = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PRICE':
      return {
        ...state,
        prices: {
          ...state.prices,
          [action.symbol]: action.price
        }
      };
    default:
      return state;
  }
}

export default updatePrice;