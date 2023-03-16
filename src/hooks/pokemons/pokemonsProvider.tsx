import React, { Context, createContext, ReactNode, useEffect, useReducer } from 'react'
import { GetPokemons_pokemon_v2_pokemon } from "../../common/graphql/__generated__/GetPokemons";

const LOCAL_STORAGE_NAME = 'pokemonItems'

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    }
};

export enum Types {
    ADD = 'ADD_POKEMON',
    REMOVE = 'REMOVE_POKEMON'
}

type PokemonPayload = {
    [Types.ADD]: GetPokemons_pokemon_v2_pokemon;
    [Types.REMOVE]: GetPokemons_pokemon_v2_pokemon;
}

type PokemonActions = ActionMap<PokemonPayload>[keyof ActionMap<PokemonPayload>];

export const pokemonsReducer = (
    state: GetPokemons_pokemon_v2_pokemon[],
    action: PokemonActions
) => {
    switch (action.type) {
        case Types.ADD:
            if(!state.length)
                state = [];
            return [...state, action.payload];
        case Types.REMOVE:
            return [...state.filter(pokemon => pokemon.id !== action.payload.id)];
        default:
            return state;
    }
}

export interface PokemonsContext {
    pokemons: GetPokemons_pokemon_v2_pokemon[];
    dispatch: React.Dispatch<PokemonActions>;
}

const initialState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME) || '[{}]') as GetPokemons_pokemon_v2_pokemon[];

const PokemonContext: Context<PokemonsContext> = createContext({} as PokemonsContext);
type Props = {
    children: ReactNode
}
const PokemonsProvider: React.FC<Props> = ({ children }) => {
    const [pokemons, dispatch] = useReducer(pokemonsReducer, initialState);
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(pokemons));
    });
    return (
        <PokemonContext.Provider value={{
            pokemons, dispatch
        }}>
            {children}
        </PokemonContext.Provider>
    );
};

export { PokemonsProvider, PokemonContext };