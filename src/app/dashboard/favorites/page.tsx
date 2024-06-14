import { Metadata } from "next";
import { PokemonsGrid } from "../pokemon/components";
import { usePokemonStore } from "@/store/pokemons/pokemonsSlice";
import { ClienPather } from "@/components/useClienePather/ClienPather";



export const metadata: Metadata = {
  title: "PokemonsFavoritePage",
  description: "Generated by create next app",
};

export default async function PokemonsPage() {
  


  return (
    <div className="flex flex-col">
      <ClienPather />
      
      <span className="text-7xl mb-3">Pokemon <small className="text-5xl text-lime-500"> Favorites</small></span>
      <PokemonsGrid list={[]} />
    </div>
  );
}