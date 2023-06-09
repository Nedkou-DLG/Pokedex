import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';
import { useContext } from 'react';
import { PokemonContext } from '../../hooks/pokemons/pokemonsProvider';
import BattleFieldModal from '../pokemons/battlefield-modal/battlefield-modal';
import React from 'react';

export default function WithSubnavigation() {
    const pokemonContext = useContext(PokemonContext);
    const { isOpen, onToggle } = useDisclosure();
    const { isOpen: isOpenModal, onClose: onCloseModal, onOpen: onOpenModal} = useDisclosure();
    const battleClick = () => {
        onOpenModal();
    }
    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}>
                        Pokedex
                    </Text>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}
                        disabled={
                            pokemonContext.pokemons?.length !== 4
                        }
                        _disabled={{
                            bg: 'pink.200'
                        }}
                        _hover={{
                            bg: 'pink.300',
                        }}
                        onClick={battleClick}>
                        Battle ({pokemonContext.pokemons?.length})
                    </Button>
                </Stack>
            </Flex>
            <BattleFieldModal isOpen={isOpenModal} onClose={onCloseModal}></BattleFieldModal>
        </Box>

    );
}