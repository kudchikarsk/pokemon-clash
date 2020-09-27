import React, { useState } from "react";
import "./PokemonCard.css"
import useFetch from "../../_hooks/useFetch";
import { toSentenceCase } from "../../_utils/strings";
import { getImage, getDescription, defaultImage } from "../../_utils/pokeapi-utils";



export default function PokemonCard({ id, onSelect }) {
    const { data: pokemon, loading: pokemonLoading, error: pokemonError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { data: species, loading: speciesLoading, error: speciesError } = useFetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    

    if (pokemonLoading || speciesLoading) return (
        <div className="card">
            <img src={defaultImage} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
            </div>
        </div>
    )

    return (
        <div className="card h-100" onClick={e=> onSelect({id, pokemon, species})}>
            <img src={getImage(pokemon)} className="card-img-top" alt={pokemon.name} />
            <div className="card-body">
                <h5 className="card-title">{toSentenceCase(pokemon.name)}</h5>
                <p className="card-text">
                {pokemon.types.map(t=>
                    (<span class="badge badge-dark mr-1">{toSentenceCase(t.type.name)}</span>))}
                </p>
                <p className="card-text">{getDescription(species)}</p>
            </div>            
        </div>
    );
}