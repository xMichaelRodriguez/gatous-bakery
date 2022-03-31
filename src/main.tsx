import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import overrides from './gatous-app/theme/index';
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={overrides}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
