import React, { useState } from 'react';
import useBinanceWebsocket from './useSocket';

function MyComponent() {
  const [symbols, setSymbols] = useState([]);
  useBinanceWebsocket(symbols);

  return (
    <div>
      <button onClick={() => setSymbols(['btcusdt', 'ethusdt'])}>Subscribe to BTCUSDT and ETHUSDT</button>
    </div>
  );
}

export default MyComponent;