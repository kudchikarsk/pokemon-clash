import React from "react"
import useFetch from "../../_hooks/useFetch";
import { defaultImage, getImage } from "../../_utils/pokeapi-utils";
import { toSentenceCase } from "../../_utils/strings";

export default function BattleCard({pokemon}) {

    if (!pokemon) return (
        <div className="card">
            <img src={defaultImage} className="card-img-top" />            
        </div>
    )

    return (
        <div className="card h-100" title={toSentenceCase(pokemon.name)}>
            <img src={getImage(pokemon)} className="card-img-top" alt={pokemon.name} />                   
        </div>
    );
}