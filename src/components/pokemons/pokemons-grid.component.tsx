import { Box } from '@chakra-ui/react';
import React from 'react'
import { GetPokemons } from '../../common/graphql/__generated__/GetPokemons';
import PokemonsGridItem from './pokemons-grid-item/pokemons-grid-item.component';

interface PokemonsGridProps {
    pokemons: GetPokemons | undefined
}

const PokemonsGrid: React.FC<PokemonsGridProps> = ({pokemons} : PokemonsGridProps) => {
    //add pokemon id
    return(
        <>
            {pokemons?.pokemon_v2_pokemon.map(pokemon => (
                <Box key={pokemon.id}>
                    <PokemonsGridItem pokemon={pokemon}></PokemonsGridItem>
                </Box>
            ))}
        </>
    );
}

export default PokemonsGrid;