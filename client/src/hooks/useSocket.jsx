import { useState, useEffect, useRef } from 'react';
import useLegacyEffect from './legacyUseEffect';

function useBinanceWebsocket(symbols = []) {
  const [subscribedSymbols, setSubscribedSymbols] = useState(symbols);
  const socketRef = useRef(null);


  useLegacyEffect(() => {
    
    // create the websocket connection
    const newSocket = new WebSocket('wss://stream.binance.com:9443/ws');

    // handle socket events
    newSocket.onopen = () => {
      // subscribe to symbols
      subscribedSymbols.forEach(symbol => {
        newSocket.send(JSON.stringify({
          method: 'SUBSCRIBE',
          params: [`${symbol}@aggTrade`],
          id: Date.now()
        }));
      });
    };

    newSocket.onmessage = (event) => {
      console.log(event.data);
    };

    newSocket.onclose = () => {
      console.log('Websocket closed');
    };

    socketRef.current = newSocket;

    // clean up function to close the socket when the component unmounts
    return () => {
      socketRef.current.close();
    };
  
  }, []);

  useLegacyEffect(() => {
    if (!socketRef.current) {
      return;
    }
    // handle subscribing and unsubscribing to symbols
    const symbolsToSubscribe = symbols.filter(
      symbol => !subscribedSymbols.includes(symbol)
    );
    const symbolsToUnsubscribe = subscribedSymbols.filter(
      symbol => !symbols.includes(symbol)
    );

    symbolsToSubscribe.forEach(symbol => {
      socketRef.current.send(JSON.stringify({
        method: 'SUBSCRIBE',
        params: [`${symbol}@aggTrade`],
        id: Date.now()
      }));
    });

    symbolsToUnsubscribe.forEach(symbol => {
      socketRef.current.send(JSON.stringify({
        method: 'UNSUBSCRIBE',
        params: [`${symbol}@aggTrade`],
        id: Date.now()
      }));
    });

    setSubscribedSymbols(symbols);
  }, [symbols]);
}

export default useBinanceWebsocket;






// import { useState, useEffect } from 'react';

// function useBinanceWebsocket(symbols = []) {
//   const [socket, setSocket] = useState(null);
//   const [subscribedSymbols, setSubscribedSymbols] = useState(symbols);
//   const [flag, setFlag] = useState(0);

//   useEffect(() => {
//     if (flag === 0) {
//         setFlag(1);
    
//     // create the websocket connection
//     const newSocket = new WebSocket('wss://stream.binance.com:9443/ws');

//     // handle socket events
//     newSocket.onopen = () => {
//       // subscribe to symbols
//       subscribedSymbols.forEach(symbol => {
//         newSocket.send(JSON.stringify({
//           method: 'SUBSCRIBE',
//           params: [`${symbol}@aggTrade`],
//           id: Date.now()
//         }));
//       });
//     };

//     newSocket.onmessage = (event) => {
//       console.log(event.data);
//     };

//     newSocket.onclose = () => {
//       console.log('Websocket closed');
//     };

//     setSocket(newSocket);

//     // clean up function to close the socket when the component unmounts
//     return () => {
//       newSocket.close();
//     };
//   }
//   }, []);

//   useEffect(() => {
//     if (!socket) {
//       return;
//     }
//     // handle subscribing and unsubscribing to symbols
//     const symbolsToSubscribe = symbols.filter(
//       symbol => !subscribedSymbols.includes(symbol)
//     );
//     const symbolsToUnsubscribe = subscribedSymbols.filter(
//       symbol => !symbols.includes(symbol)
//     );

//     symbolsToSubscribe.forEach(symbol => {
//       socket.send(JSON.stringify({
//         method: 'SUBSCRIBE',
//         params: [`${symbol}@aggTrade`],
//         id: Date.now()
//       }));
//     });

//     symbolsToUnsubscribe.forEach(symbol => {
//       socket.send(JSON.stringify({
//         method: 'UNSUBSCRIBE',
//         params: [`${symbol}@aggTrade`],
//         id: Date.now()
//       }));
//     });

//     setSubscribedSymbols(symbols);
//   }, [symbols, socket]);
// }

// export default useBinanceWebsocket;