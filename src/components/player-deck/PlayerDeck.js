import React from "react"
import PlayerCard from "../player-card/PlayerCard";

export default function PlayerDeck({ player, onCardSelect }) {
    return (
        <div className="row">
            {player.cards.map(c=>(
                <div className="col-1">
                    <PlayerCard card={c} key={c.id} onCardSelect={onCardSelect}/>
                </div>
            ))}
        </div>
    );
}