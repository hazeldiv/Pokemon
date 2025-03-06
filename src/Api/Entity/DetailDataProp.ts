import { move } from "./PokemonMoveprop";

export interface DetailData {
    moves: move[]
    weight: number,
    height: number,
    id: number,
    name: string,
}