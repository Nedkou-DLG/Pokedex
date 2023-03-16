/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPokemon
// ====================================================

export interface GetPokemon_pokemon_v2_pokemon_pokemon_v2_pokemonstats_pokemon_v2_stat {
  __typename: "pokemon_v2_stat";
  name: string;
}

export interface GetPokemon_pokemon_v2_pokemon_pokemon_v2_pokemonstats {
  __typename: "pokemon_v2_pokemonstat";
  id: number;
  effort: number;
  base_stat: number;
  /**
   * An object relationship
   */
  pokemon_v2_stat: GetPokemon_pokemon_v2_pokemon_pokemon_v2_pokemonstats_pokemon_v2_stat | null;
}

export interface GetPokemon_pokemon_v2_pokemon_pokemon_v2_pokemonsprites {
  __typename: "pokemon_v2_pokemonsprites";
  sprites: string;
}

export interface GetPokemon_pokemon_v2_pokemon_pokemon_v2_pokemonspecy {
  __typename: "pokemon_v2_pokemonspecies";
  base_happiness: number | null;
}

export interface GetPokemon_pokemon_v2_pokemon {
  __typename: "pokemon_v2_pokemon";
  id: number;
  name: string;
  /**
   * An array relationship
   */
  pokemon_v2_pokemonstats: GetPokemon_pokemon_v2_pokemon_pokemon_v2_pokemonstats[];
  /**
   * An array relationship
   */
  pokemon_v2_pokemonsprites: GetPokemon_pokemon_v2_pokemon_pokemon_v2_pokemonsprites[];
  /**
   * An object relationship
   */
  pokemon_v2_pokemonspecy: GetPokemon_pokemon_v2_pokemon_pokemon_v2_pokemonspecy | null;
}

export interface GetPokemon {
  /**
   * fetch data from the table: "pokemon_v2_pokemon"
   */
  pokemon_v2_pokemon: GetPokemon_pokemon_v2_pokemon[];
}

export interface GetPokemonVariables {
  id: number;
}
