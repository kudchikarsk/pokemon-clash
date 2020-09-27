import React, { useState, useEffect } from "react";
import Player from "../player/Player";
import {getPlayerCards} from "../../_utils/player-utils"
import { starterPack } from "../../_utils/pokeapi-utils";
import { sampleSize } from "lodash";
import BattleCard from "../battle-card/BattleCard";

const opponentCards =  sampleSize(starterPack,3).map(id=>({id}));

export default function Board() {
    
    const [player, setPlayer] = useState(null);
    const [opponent, setOpponent] = useState(null);

    function onCardSelect (pokemon) {
        setPlayer({
            selected:pokemon,
            cards:getPlayerCards()
        });
    }

    function onOpponentCardSelect(pokemon) {
        setOpponent({
            selected:pokemon,
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
        <section>
            <Player player={opponent} onCardSelect={onOpponentCardSelect} />
            <div className="row my-5">
                <div className="col-3 offset-2">
                    <BattleCard pokemon={player.selected} />
                </div>
                <div className="col-2"></div>
                <div className="col-3">
                    <BattleCard pokemon={opponent.selected} />
                </div>
            </div>
            <Player player={player} onCardSelect={onCardSelect} />
        </section>
    )
}