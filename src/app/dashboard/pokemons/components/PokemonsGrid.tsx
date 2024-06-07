import { SinglePokemon } from "../interfaces"
import { PokemonCart } from "./PokemonCart";

interface Props {
    list: Array<SinglePokemon>
}


export const PokemonsGrid = ({ list }: Props) => {

    return (
        <div className="flex flex-wrap items-center justify-between;">
            {list.map(pokemon =>
                <PokemonCart pokemon={pokemon} key={pokemon.id} />
            )}
        </div>
    )
}
