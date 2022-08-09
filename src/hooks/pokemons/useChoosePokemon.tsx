import { useEffect, useState } from "react";
import { GetPokemons, GetPokemons_pokemon_v2_pokemon } from "../../common/graphql/__generated__/GetPokemons";

const LOCAL_STORAGE_NAME = 'pokemonItems'

function getPokemonsFromStorage(): GetPokemons {
    const item = localStorage.getItem(LOCAL_STORAGE_NAME);
    const allPokemons: GetPokemons = JSON.parse(item || '{}') as GetPokemons;
    return allPokemons;
}

export const usePokemonStorage = () => {
    const [pokemonsValue, setPokemonValue] = useState(() => {
        return getPokemonsFromStorage();
    })

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(pokemonsValue));
    });

    return [pokemonsValue, setPokemonValue] as const;
}

export const useChoosePokemon = () => {
    const [pokemons, setPokemons] = usePokemonStorage();

    const setValue = (value: GetPokemons_pokemon_v2_pokemon) => {
        if (pokemons.pokemon_v2_pokemon?.length) {
            const existingPokemon = pokemons.pokemon_v2_pokemon?.find(x => x.id === value.id);
            if (!existingPokemon) {
                pokemons.pokemon_v2_pokemon.push(value);
            } else {
                const index = pokemons.pokemon_v2_pokemon.indexOf(existingPokemon);
                pokemons.pokemon_v2_pokemon.splice(index, 1);
            }
        } else {
            pokemons.pokemon_v2_pokemon = []
            pokemons.pokemon_v2_pokemon.push(value);
        }
        setPokemons(pokemons);
    }

    return [pokemons, setValue] as const;
}