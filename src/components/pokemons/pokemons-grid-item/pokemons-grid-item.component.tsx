import React from 'react';
import {
    Heading,
    Box,
    Center,
    Image,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Container,
} from '@chakra-ui/react';
import { GetPokemons_pokemon_v2_pokemon } from '../../../common/graphql/__generated__/GetPokemons';


const PokemonsGridItem: React.FC<{ pokemon: GetPokemons_pokemon_v2_pokemon }> = ({ pokemon }: { pokemon: GetPokemons_pokemon_v2_pokemon }) => {
    const pokemonSprite = JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites).front_default;
    let pokemonPowers = pokemon.pokemon_v2_pokemonstats.map(x => x.base_stat);
    const averagePower = pokemonPowers.reduce((prevValue,curValue) => {
        return prevValue + curValue;
    },0) / pokemonPowers.length;
    return (
        <Box py={6}>
            <Box
                maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    h={'190px'}
                    w={'full'}
                    src={
                     pokemonSprite
                    }
                    objectFit={'cover'}
                />
                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            {pokemon.name}
                        </Heading>
                        <Text color={'gray.500'}>Happiness {pokemon.pokemon_v2_pokemonspecy?.base_happiness}</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                       
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>{averagePower.toFixed(2)}</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Power
                            </Text>
                        </Stack>
                    </Stack>

                    <Button
                        w={'full'}
                        mt={8}
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}>
                        Choose
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default PokemonsGridItem;