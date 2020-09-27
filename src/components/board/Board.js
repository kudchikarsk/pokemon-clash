import React, { useState, useEffect } from "react";
import Player from "../player/Player";
import {getPlayerCards} from "../../_utils/player-utils"
import BattleCard from "../battle-card/BattleCard";
import "./Board.css"
import useFetch from "../../_hooks/useFetch";
import Loading from "../loading/Loading";


export default function Board() {
    
    const [player, setPlayer] = useState(null);
    const [opponent, setOpponent] = useState(null);
    const {data:opponentCards, loading, error} = useFetch(`/random-cards.json`,[]);
       

    useEffect(()=>{
        setPlayer({
            selected:null,
            cards:getPlayerCards()
        });

        setOpponent({
            selected: null,
            cards:opponentCards
        });

    },[opponentCards]);

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

    if(!player || !opponent) return (<Loading/>);
    
    return (
        <section className="my-2">
            <Player player={opponent} onCardSelect={onOpponentCardSelect} />
            <div className="row my-5">
                <div className="col-6">
                    <BattleCard card={player.selected} isPlayer={true} />
                </div>
                <div className="col-6">
                    <BattleCard card={opponent.selected} isPlayer={false} />
                </div>
            </div>
            <Player player={player} onCardSelect={onCardSelect} />
        </section>
    )
}