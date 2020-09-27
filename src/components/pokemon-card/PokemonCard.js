import React, { useState } from "react";
import "./PokemonCard.css"
import useFetch from "../../_hooks/useFetch";
import { toSentenceCase } from "../../_utils/strings";
import { getImage, getDescription } from "../../_utils/pokeapi-utils";

const defaultImage = `/images/poke.gif`;

export default function PokemonCard({ id }) {
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
        <div className="card h-100">
            <img src={getImage(pokemon)} className="card-img-top" alt={pokemon.name} />
            <div className="card-body">
                <h5 className="card-title">{toSentenceCase(pokemon.name)}</h5>
                <p className="card-text">{getDescription(species)}</p>
            </div>
            <ul className="list-group list-group-flush">
                {pokemon.types.map(t=>
                    (<li className="list-group-item">{toSentenceCase(t.type.name)}</li>))}
            </ul>
        </div>
    );
}