
import React from 'react';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import Main from './layout/main';

function App() {
  return (
      <ChakraProvider>
        <Main />
      </ChakraProvider>
  );
}

export default App;