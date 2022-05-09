import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider appId='lhTyBJZua76w8sSJpYTTIz2DkxaSQhMrtrzKsJ2l' serverUrl='https://wg4g2vyjt3rt.usemoralis.com:2053/server'>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MoralisProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
