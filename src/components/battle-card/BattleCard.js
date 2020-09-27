import React from "react"
import "./BattleCard.css"
import useFetch from "../../_hooks/useFetch";
import { defaultImage, getImage } from "../../_utils/pokeapi-utils";
import { toSentenceCase } from "../../_utils/strings";
import Move from "../move/Move";

export default function BattleCard({ card, isPlayer }) {

    if (!card && isPlayer) {
        return (
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <div className="card">
                        <img src={defaultImage} className="card-img-top" />
                    </div>
                </div>
            </div>
        )
    }
    else if (!card && !isPlayer) {
        return (
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <img src={defaultImage} className="card-img-top" />
                    </div>
                </div>
                <div className="col-6"></div>
            </div>
        )
    }

    if (isPlayer) {
        return (
            <section className="row">
                <div className="col-6">
                    <ul className="list-group scroll-list">
                        {card.pokemon.moves.map(m => (<Move move={m} key={m.move.name} />))}
                    </ul>
                </div>
                <div className="col-6">
                    <div className="card h-100" title={toSentenceCase(card.pokemon.name)}>
                        <img src={getImage(card.pokemon)} className="card-img-top" alt={card.pokemon.name} />
                    </div>
                </div>
            </section>
        );
    }
    else {
        return (
            <section className="row">
                <div className="col-6">
                    <div className="card h-100" title={toSentenceCase(card.pokemon.name)}>
                        <img src={getImage(card.pokemon)} className="card-img-top" alt={card.pokemon.name} />
                    </div>
                </div>
                <div className="col-6">
                    <ul className="list-group scroll-list">
                    {card.pokemon.moves.map(m => (<Move move={m} key={m.move.name} />))}
                    </ul>
                </div>
            </section>
        );
    }

}