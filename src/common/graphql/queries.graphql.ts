import { gql } from "@apollo/client";

export const GET_POKEMONS = gql `
query GetPokemons($limit: Int) {
    pokemon_v2_pokemon(limit: 10) {
      id
      name
      pokemon_v2_pokemonstats {
        id
        effort
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonspecy {
        base_happiness
      }
    }
  }
`