import { useContext, useEffect, useState } from "react"
import { GetPokemons_pokemon_v2_pokemon } from "../../common/graphql/__generated__/GetPokemons";
import { getPokemonPower } from "../../components/pokemons/pokemons-grid-item/pokemons-grid-item.component";
import { PokemonContext } from "./pokemonsProvider"

function comparePokemonsPower(first: GetPokemons_pokemon_v2_pokemon, second: GetPokemons_pokemon_v2_pokemon): number {

    const firstPower = getPokemonPower(first.pokemon_v2_pokemonstats);
    const secondPower = getPokemonPower(second.pokemon_v2_pokemonstats);

    return firstPower - secondPower;
}


export const useBattlePokemon = () => {
    const { pokemons } = useContext(PokemonContext);
    const [sortedPokemons, setSortedPokemons] = useState(pokemons);
    
    useEffect(() => {
        const sortArray = (pokemonsArray: GetPokemons_pokemon_v2_pokemon[]) => {
            const sortedArray = [...pokemonsArray].sort(comparePokemonsPower);
            setSortedPokemons(sortedArray);
        };
        sortArray(pokemons);
    }, [pokemons]);

    const [winner] = useState(() => pokemons[pokemons.length - 1]);
    const [secondaryPokemons] = useState(() => sortedPokemons.filter(x => x.id !== winner.id))

    return [winner, secondaryPokemons] as const;
}