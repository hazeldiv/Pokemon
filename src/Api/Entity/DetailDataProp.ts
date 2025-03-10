import { MoveProp } from "./PokemonMoveprop";

export interface DetailDataProp {
    moves: MoveProp[]
    weight: number,
    height: number,
    id: number,
    name: string,
}