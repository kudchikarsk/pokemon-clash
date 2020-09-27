import React from "react"
import useFetch from "../../_hooks/useFetch";
import { defaultImage, getImage } from "../../_utils/pokeapi-utils";
import { toSentenceCase } from "../../_utils/strings";

export default function PlayerCard({card, onCardSelect}) {
    const { data: pokemon, loading: pokemonLoading, error: pokemonError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${card.id}`);    

    if (pokemonLoading || !card) return (
        <div className="card">
            <img src={defaultImage} className="card-img-top" />            
        </div>
    )

    return (
        <div className="card h-100" title={toSentenceCase(pokemon.name)} onClick={e=>onCardSelect(card)}>
            <img src={getImage(pokemon)} className="card-img-top" alt={pokemon.name} />                   
        </div>
    );
}