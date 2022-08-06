/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPokemons
// ====================================================

export interface GetPokemons_pokemon_v2_pokemon_pokemon_v2_pokemonstats_pokemon_v2_stat {
  __typename: "pokemon_v2_stat";
  name: string;
}

export interface GetPokemons_pokemon_v2_pokemon_pokemon_v2_pokemonstats {
  __typename: "pokemon_v2_pokemonstat";
  id: number;
  effort: number;
  base_stat: number;
  /**
   * An object relationship
   */
  pokemon_v2_stat: GetPokemons_pokemon_v2_pokemon_pokemon_v2_pokemonstats_pokemon_v2_stat | null;
}

export interface GetPokemons_pokemon_v2_pokemon_pokemon_v2_pokemonsprites {
  __typename: "pokemon_v2_pokemonsprites";
  sprites: string;
}

export interface GetPokemons_pokemon_v2_pokemon_pokemon_v2_pokemonspecy {
  __typename: "pokemon_v2_pokemonspecies";
  base_happiness: number | null;
}

export interface GetPokemons_pokemon_v2_pokemon {
  __typename: "pokemon_v2_pokemon";
  id: number;
  name: string;
  /**
   * An array relationship
   */
  pokemon_v2_pokemonstats: GetPokemons_pokemon_v2_pokemon_pokemon_v2_pokemonstats[];
  /**
   * An array relationship
   */
  pokemon_v2_pokemonsprites: GetPokemons_pokemon_v2_pokemon_pokemon_v2_pokemonsprites[];
  /**
   * An object relationship
   */
  pokemon_v2_pokemonspecy: GetPokemons_pokemon_v2_pokemon_pokemon_v2_pokemonspecy | null;
}

export interface GetPokemons {
  /**
   * fetch data from the table: "pokemon_v2_pokemon"
   */
  pokemon_v2_pokemon: GetPokemons_pokemon_v2_pokemon[];
}

export interface GetPokemonsVariables {
  limit?: number | null;
}
