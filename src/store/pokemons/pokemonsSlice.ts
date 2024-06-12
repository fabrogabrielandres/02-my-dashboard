import { SinglePokemon } from "@/app/dashboard/pokemon/interfaces";
import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface PokemonsActions {

}
const initialState: PokemonsFavorite = {
    "10": { id: "50", name: "hola" },
    "11": { id: "10", name: "hola" },
    "12": { id: "10", name: "hola" },
    "13": { id: "10", name: "hola" }
}

export interface PokemonsFavorite {
    [id: string]: SinglePokemon
}

export interface PokemonsFavoriteState {
    initialState: PokemonsFavorite
}



export const pokemonSlice: StateCreator<(PokemonsActions & PokemonsFavoriteState), [["zustand/devtools", never]]> = ((set, get) => ({
    initialState
})
)


export const usePokemonStore = create<PokemonsActions & PokemonsFavoriteState>()(
    pokemonSlice
);