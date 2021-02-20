import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// import reportWebVitals from './reportWebVitals';

// componenets imports
import App from './App';

// CSS imports
import { Flex, ChakraProvider } from "@chakra-ui/react"
// ChakraProvider adds ThemeProvider, ColorModeProvider, and GlobalStyle automatically - cleaner setup
// optional via propr: CSSReset, PortalManager

var cors = require('cors')
require('dotenv').config()

ReactDOM.render(
  <ChakraProvider>
    <Flex direction="column" align="center" justify="center">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Flex>
    </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
