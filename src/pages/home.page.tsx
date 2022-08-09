import { Flex } from '@chakra-ui/react';
import React from 'react'
import PokemonsGrid from '../components/pokemons/pokemons-grid.component';
import { useGetPokemons } from '../hooks/pokemons/useGetPokemons';
const Home: React.FC = () => {
    const pokemons = useGetPokemons();
    return (
        <Flex
        flexDirection={'row'}
        flexWrap={'wrap'}
        gap={14}
        justifyContent={'center'}
        >
            <PokemonsGrid pokemons={pokemons}></PokemonsGrid>
        </Flex>
    );
}

export default Home;