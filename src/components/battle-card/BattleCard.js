import React from "react"
import useFetch from "../../_hooks/useFetch";
import { defaultImage, getImage } from "../../_utils/pokeapi-utils";
import { toSentenceCase } from "../../_utils/strings";

export default function BattleCard({card}) {

    if (!card) return (
        <div className="card">
            <img src={defaultImage} className="card-img-top" />            
        </div>
    )

    return (
        <div className="card h-100" title={toSentenceCase(card.pokemon.name)}>
            <img src={getImage(card.pokemon)} className="card-img-top" alt={card.pokemon.name} />                   
        </div>
    );
}