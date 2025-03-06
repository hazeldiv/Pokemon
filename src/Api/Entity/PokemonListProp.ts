import { PokemonCardProp } from "./PokemonCardProp";

export interface PokemonListProp {
    count: number,
    next: string,
    results: PokemonCardProp[],
}