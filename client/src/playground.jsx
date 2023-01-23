// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateAggregatedTrades } from './actions';

// export default function BinanceTrades() {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         let timeoutId;
//         const ws = new WebSocket('wss://stream.binance.com/aggTrades');

//         // Send the subscription message when the connection is open
//         ws.onopen = () => {
//             ws.send(JSON.stringify({
//                 "method": "SUBSCRIBE",
//                 "params": ["btcusdt@aggTrade"],
//                 "id": 1
//             }));
//         }

//         // Handle incoming data
//         ws.onmessage = (event) => {
//             const data = JSON.parse(event.data);
//             const symbol = data.s;
//             const newPrice = data.p;
//             dispatch(updateAggregatedTrades(symbol, newPrice));
//         }

//         // Handle errors
//         ws.onerror = (error) => {
//             console.error(`WebSocket error: ${error}`);
//         }

//         // Handle close event
//         ws.onclose = (event) => {
//             console.log(`WebSocket closed with code ${event.code} and reason ${event.reason}`);
//         }

//         // Initiate the WebSocket connection 3 seconds after the component has mounted
//         timeoutId = setTimeout(() => {
//             ws.open();
//         }, 3000);
        
//         // Close the connection and clear the timeout when the component unmounts
//         return () => {
//             clearTimeout(timeoutId);
//             ws.close();
//         }
//     }, [dispatch]);

//     return null;
// }



// scaffold out the redux store to store binance exchange data from websocket
// Path: client/src/store.js

const _store = {
    exchanges: {
        binance: {
            symbols: {
                btcusdt: {
                    aggregatedTrades: {
                        price: 0,
                        time: 0
                    }
                },
                ethusdt: {
                    aggregatedTrades: {
                        price: 0,
                        time: 0
                    }
                }
            }
        }
    }
}

function aggregatedTradesPrice(exchange, symbol) {
    const price = _store.exchanges[exchange].symbols[symbol].aggregatedTrades.price;
    const time = _store.exchanges.binance.symbols.btcusdt.aggregatedTrades.time;
    return { price, time };
}
console.log(aggregatedTradesPrice('binance', 'btcusdt'));
console.log(aggregatedTradesPrice('binance', 'ethusdt'));