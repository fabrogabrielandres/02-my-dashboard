"use client";

import * as React from "react";
import { devtools } from "zustand/middleware";
import { CounterActions, CounterState, useCounterStore, counterSlice } from "./counter/counterSlice";
import { PokemonsActions, PokemonsFavoriteState, pokemonSlice } from "./pokemons/pokemonsSlice";
import { create } from "zustand";



type ShareState = PokemonsActions & PokemonsFavoriteState & CounterActions & CounterState;

export const useWeddingBoundStore = create<ShareState>()(
    devtools((...a) => ({
        ...counterSlice(...a),
        ...pokemonSlice(...a)
    })),

);



const Hydration = () => {
    React.useEffect(() => {
        useWeddingBoundStore
        // useCounterStore.persist.rehydrate();
    }, []);

    return null;
};

export default Hydration;