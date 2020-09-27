import React from "react"
import useFetch from "../../_hooks/useFetch";
import { defaultImage, getImage } from "../../_utils/pokeapi-utils";
import { toSentenceCase } from "../../_utils/strings";

export default function PlayerCard({id, onCardSelect}) {
    const { data: pokemon, loading: pokemonLoading, error: pokemonError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);    

    if (pokemonLoading || !id) return (
        <div className="card">
            <img src={defaultImage} className="card-img-top" />            
        </div>
    )

    return (
        <div className="card h-100" title={toSentenceCase(pokemon.name)} onClick={e=>onCardSelect(pokemon)}>
            <img src={getImage(pokemon)} className="card-img-top" alt={pokemon.name} />                   
        </div>
    );
}