import { SinglePokemon } from "@/app/dashboard/pokemon/interfaces";
import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

const initialState: PokemonsFavorite = {
    "9": { id: "9", name: "hola" },
}

export interface PokemonsActions {
    toggleFavorite?: (singlePokemon: SinglePokemon) => void
}

export interface PokemonsFavorite {
    [id: string]: SinglePokemon
}

export interface PokemonsFavoriteState {
    isFavorite: PokemonsFavorite
}

type PokemonSlice = PokemonsActions & PokemonsFavoriteState;

export const pokemonSlice: StateCreator<(PokemonsActions & PokemonsFavoriteState), [["zustand/devtools", never]]> = ((set, get) => ({
    isFavorite: initialState,
    toggleFavorite: (pokemon: SinglePokemon) => {
        set((state) => {
            const { id, name } = pokemon;
            const allFavorite = get().isFavorite;
            if (!!allFavorite[id]) {
                const { [id]: Todelete, ...rest } = allFavorite;
                return ({ isFavorite: rest })
            }
            return ({ isFavorite: { ...state.isFavorite, [id]: { name: name, id: id } } })
        }, false, "toggleFavorite")
    }
}))



export const usePokemonStore = create<PokemonsActions & PokemonsFavoriteState>()(
    devtools(
        persist(
            pokemonSlice,
            {
                name: "pokemonSlice"
            }
        )
    )
);