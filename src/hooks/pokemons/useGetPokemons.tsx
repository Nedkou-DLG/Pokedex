import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../common/graphql/queries.graphql"
import { GetPokemons } from "../../common/graphql/__generated__/GetPokemons";
export const useGetPokemons = () => {
    const { data, loading } = useQuery<GetPokemons>(GET_POKEMONS);
    return [data, loading] as const;
}