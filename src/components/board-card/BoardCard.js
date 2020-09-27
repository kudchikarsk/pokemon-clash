import React from "react"
import useFetch from "../../_hooks/useFetch";
import { defaultImage, getImage } from "../../_utils/pokeapi-utils";
import { toSentenceCase } from "../../_utils/strings";

export default function BoardCard({id}) {
    const { data: pokemon, loading: pokemonLoading, error: pokemonError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);    

    if (pokemonLoading) return (
        <div className="card">
            <img src={defaultImage} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title"></h5>
            </div>
        </div>
    )

    return (
        <div className="card h-100">
            <img src={getImage(pokemon)} className="card-img-top" alt={pokemon.name} />
            <div className="card-body">
                <h5 className="card-title">{toSentenceCase(pokemon.name)}</h5>               
            </div>           
        </div>
    );
}