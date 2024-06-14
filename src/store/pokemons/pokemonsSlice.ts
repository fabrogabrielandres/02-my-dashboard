import { SinglePokemon } from "@/app/dashboard/pokemon/interfaces";
import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

const initialState: PokemonsFavorite = {
    '1': {
        name: 'bulbasaur',
        id: '1'
    },
    '2': {
        name: 'ivysaur',
        id: '2'
    },
    '3': {
        name: 'venusaur',
        id: '3'
    }

}

export interface PokemonsActions {
    toggleFavorite?: (singlePokemon: SinglePokemon) => void
}

export interface PokemonsFavorite {
    [id: string]: SinglePokemon
}

export interface PokemonsFavoriteState {
    listFavorite: PokemonsFavorite
}

type PokemonSlice = PokemonsActions & PokemonsFavoriteState;

export const pokemonSlice: StateCreator<(PokemonsActions & PokemonsFavoriteState), [["zustand/devtools", never]]> = ((set, get) => ({
    listFavorite: initialState,
    toggleFavorite: (pokemon: SinglePokemon) => {
        set((state) => {
            const { id, name } = pokemon;
            const allFavorite = get().listFavorite;
            if (!!allFavorite[id]) {
                const { [id]: Todelete, ...rest } = allFavorite;
                return ({ listFavorite: rest })
            }
            return ({ listFavorite: { ...state.listFavorite, [id]: { name: name, id: id } } })
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