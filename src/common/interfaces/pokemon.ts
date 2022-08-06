export interface Pokemon {
    id: number,
    name: string,
    pokemon_v2_pokemonstats: [
        {
            id: number,
            effort: number,
            base_stat: number,
            pokemon_v2_stat: {
                name: string
            }
        }
    ]
    pokemon_v2_sprites: [
        {
            sprites: string
        }
    ]
}