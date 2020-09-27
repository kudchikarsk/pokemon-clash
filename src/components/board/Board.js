import React, { useState, useEffect } from "react";
import Player from "../player/Player";
import {getPlayerCards} from "../../_utils/player-utils"
import BattleCard from "../battle-card/BattleCard";
import "./Board.css"

const opponentCards =  getPlayerCards();

export default function Board() {
    
    const [player, setPlayer] = useState(null);
    const [opponent, setOpponent] = useState(null);

    function onCardSelect (card) {
        setPlayer({
            selected:card,
            cards:getPlayerCards()
        });
    }

    function onOpponentCardSelect(card) {
        setOpponent({
            selected:card,
            cards:opponentCards
        });
    }

    useEffect(()=>{
        setPlayer({
            selected:null,
            cards:getPlayerCards()
        });

        setOpponent({
            selected: null,
            cards:opponentCards
        });

    },[]);

    if(!player || !opponent) return (<h1>Loading...</h1>);
    
    return (
        <section className="board">
            <Player player={opponent} onCardSelect={onOpponentCardSelect} />
            <div className="row my-5">
                <div className="col-3 offset-2">
                    <BattleCard card={player.selected} />
                </div>
                <div className="col-2"></div>
                <div className="col-3">
                    <BattleCard card={opponent.selected} />
                </div>
            </div>
            <Player player={player} onCardSelect={onCardSelect} />
        </section>
    )
}