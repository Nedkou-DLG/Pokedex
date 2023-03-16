import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Container, 
    Text
} from '@chakra-ui/react'
import { useBattlePokemon } from '../../../hooks/pokemons/useBattlePokemon';

const BattleFieldModal: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {

    const [winner, secondaryPokemons] = useBattlePokemon();

    return <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Battlefield</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>The winner is: {winner.name}</Text>
                    <>
                        {secondaryPokemons.map(pokemon => {
                            return <Text key={pokemon.id}>{pokemon.name}</Text>;
                        })}
                    </>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}

export default BattleFieldModal;