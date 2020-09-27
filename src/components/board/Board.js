import React, { useState } from "react";
import BoardCard from "../board-card/BoardCard";


export default function Board({board}) {
    if(!board) return (<div>Loading...</div>);
    let {player,opponent} = board;
    
    return (
        <section>
            <div className="row">
            <div className="col-3 offset-2">
                <BoardCard id={player.pokemon.id}/>
            </div>
            <div className="col-2"></div>
            <div className="col-3">
                <BoardCard id={opponent.pokemon.id}/>
            </div>
            </div>
        </section>
    )
}