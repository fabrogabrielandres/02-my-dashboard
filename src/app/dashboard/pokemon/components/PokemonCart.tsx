"use client"
import Image from "next/image";
import Link from 'next/link';
import { SinglePokemon } from '../interfaces';
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { PokemonsFavorite, usePokemonStore } from "@/store/pokemons/pokemonsSlice";

interface Props {
    pokemon: SinglePokemon
}

export const PokemonCart = ({ pokemon }: Props) => {
    const { id, name } = pokemon;

    const isFavorite = usePokemonStore().isFavorite[id]
    const { toggleFavorite } = usePokemonStore()


    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col justify-center items-center text-center p-6 bg-gray-800 border-b">
                    <Image key={id} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt={pokemon.name} width={100} height={100} priority={false} />

                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    {/* <p className="text-sm text-gray-100">{name}</p> */}
                    <div className="mt-5">
                        <Link
                            href={`pokemon/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            More information
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div className="px-4 py-2 hover:bg-gray-100 flex items-center justify-center" >
                        <div onClick={() => toggleFavorite!(pokemon)} className="text-red-600 cursor-pointer" >
                            {!!isFavorite ? <IoHeart /> : <IoHeartOutline />}
                        </div>
                        <div className="pl-3 flex flex-col items-center justify-center">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                Is not favorite
                            </p>
                            <p className="text-xs text-gray-500">View your campaigns</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
