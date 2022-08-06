import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../common/graphql/queries.graphql"
import { GetPokemons, GetPokemonsVariables } from "../../common/graphql/__generated__/GetPokemons";
export const useGetPokemons = (limit:number = 10): GetPokemons | undefined => {
    const { data } = useQuery<GetPokemons, GetPokemonsVariables>(GET_POKEMONS, {
        variables: { limit: limit }
    });
    return data;
}