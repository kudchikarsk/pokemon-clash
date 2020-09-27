import React from "react";
import "./Training.css"
import {Opponent, Board, Player} from '../../components'
export default function Training() {
 return (
     <section>
        <Opponent/>
        <Board/>
        <Player/>
     </section>
 )   
}