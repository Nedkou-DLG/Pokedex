import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from '../../pages/home.page';
import { ApolloProvider } from '@apollo/client';
import client from '../../common/apollo-client';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
