import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from '../../pages/home.page';
import { ApolloProvider } from '@apollo/client';
import client from '../../common/apollo-client';
import WithSubnavigation from '../header/header.component';
import { PokemonsProvider } from '../../hooks/pokemons/pokemonsProvider';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <PokemonsProvider>
          <WithSubnavigation />
          <Home />
        </PokemonsProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
