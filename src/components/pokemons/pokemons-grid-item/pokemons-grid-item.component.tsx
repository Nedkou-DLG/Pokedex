import React, { useContext, useState } from 'react';
import {
    Heading,
    Box,
    Image,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { GetPokemons_pokemon_v2_pokemon, GetPokemons_pokemon_v2_pokemon_pokemon_v2_pokemonstats } from '../../../common/graphql/__generated__/GetPokemons';
import { PokemonContext, PokemonsContext, Types } from '../../../hooks/pokemons/pokemonsProvider';

const isPokemonsExists = (pokemon: GetPokemons_pokemon_v2_pokemon, allPokemons: GetPokemons_pokemon_v2_pokemon[]): boolean => {

    return allPokemons?.find(x => x.id === pokemon.id) ? true : false;
}

const BUTTON_TITLE = {
    Choose: 'Choose',
    Unchoose: 'Unchoose'
};

const addOrDeletePokemon = (pokemon: GetPokemons_pokemon_v2_pokemon, context: PokemonsContext): string => {
    const allPokemons = context.pokemons;
    if (allPokemons?.length) {
        const existingPokemon = allPokemons?.find(x => x.id === pokemon.id);
        if (!existingPokemon) {
            context.dispatch({ type: Types.ADD, payload: pokemon });
            return BUTTON_TITLE.Unchoose;
        } else {
            context.dispatch({ type: Types.REMOVE, payload: pokemon });
            return BUTTON_TITLE.Choose;
        }
    } else {
        context.dispatch({ type: Types.ADD, payload: pokemon });
        return BUTTON_TITLE.Unchoose;
    }
}

export const getPokemonPower = (pokemonStats: GetPokemons_pokemon_v2_pokemon_pokemon_v2_pokemonstats[]): number => {
    const pokemonPowers = pokemonStats.map(x => x.base_stat);
    const averagePower = pokemonPowers.reduce((prevValue, curValue) => {
        return prevValue + curValue;
    }, 0) / pokemonPowers.length;

    return averagePower;
}

const PokemonsGridItem: React.FC<{ pokemon: GetPokemons_pokemon_v2_pokemon }> = ({ pokemon }: { pokemon: GetPokemons_pokemon_v2_pokemon }) => {
    const pokemonsContext = useContext(PokemonContext);

    const [buttonTitle, setButtonTitle] = useState(() => {
        return isPokemonsExists(pokemon, pokemonsContext.pokemons) ? 'Unchoose' : 'Choose'
    });

    const handleClick = () => {
        const buttonTitle = addOrDeletePokemon(pokemon, pokemonsContext);
        setButtonTitle(buttonTitle);
    }

    const pokemonSprite = JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites).front_default;

    return (
        <Box py={6}>
            <Box
                maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Box maxW={'270px'}>
                    <Image
                        h={'full'}
                        w={'full'}
                        src={
                            pokemonSprite
                        }
                        objectFit={'cover'}
                    />
                </Box>
                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            {pokemon.name}
                        </Heading>
                        <Text color={'gray.500'}>Happiness {pokemon.pokemon_v2_pokemonspecy?.base_happiness}</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>

                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>{getPokemonPower(pokemon.pokemon_v2_pokemonstats).toFixed(2)}</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Power
                            </Text>
                        </Stack>
                    </Stack>

                    <Button
                        w={'full'}
                        mt={8}
                        bg={'pink.400'}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}
                        onClick={() => handleClick()}
                    >
                        {buttonTitle}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default PokemonsGridItem;