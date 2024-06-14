"use client";

import * as React from "react";
import { devtools, persist } from 'zustand/middleware';
import { CounterActions, CounterState, useCounterStore, counterSlice } from "./counter/counterSlice";
import { PokemonsActions, PokemonsFavoriteState, pokemonSlice, usePokemonStore } from "./pokemons/pokemonsSlice";
import { create } from "zustand";



type ShareState = PokemonsActions & PokemonsFavoriteState & CounterActions & CounterState;

export const useWeddingBoundStore = create<ShareState>()(
    (...a) => ({
        ...counterSlice(...a),
        ...pokemonSlice(...a),
    })
);




const Hydration = () => {
    React.useEffect(() => {
        // useWeddingBoundStore.persist.rehydrate();
        useCounterStore.persist.rehydrate();
        usePokemonStore.persist.rehydrate();

    }, []);

    return null;
};

export default Hydration;