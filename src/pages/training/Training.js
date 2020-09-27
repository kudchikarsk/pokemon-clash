import React, { useEffect, useState } from "react";
import "./Training.css"
import { Opponent, Board, Player } from '../../components'
import {getPlayerCards} from "../../_utils/player-utils"
import { starterPack } from "../../_utils/pokeapi-utils";
import { sample, head } from "lodash";

export default function Training() {

    const [board, setBoard] = useState(null);

    useEffect(()=>{
        let card = head(getPlayerCards());       
        setBoard({
            player:{
                pokemon:{
                    id:card.id,
                }
            },
            opponent:{
                pokemon: {
                    id: sample(starterPack)
                }
            }
        });
    },[]);

    return (
        <section>
            <Opponent />
            <Board board={board} />
            <Player />
        </section>
    )
}