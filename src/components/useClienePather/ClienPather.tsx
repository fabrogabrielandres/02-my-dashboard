"use client"

import { PokemonsGrid } from "@/app/dashboard/pokemon/components";
import { usePokemonStore } from "@/store/pokemons/pokemonsSlice"
import { useState } from "react";


export const ClienPather = () => {
    const { listFavorite } = usePokemonStore((state) => state)
    const myentries = Object.values(listFavorite);
    const [favoritesPokemons, setFavoritesPokemons] = useState(myentries)
    return (
        <>
            <PokemonsGrid list={favoritesPokemons}/>
        </>
    )
}
