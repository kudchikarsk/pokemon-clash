import React, { useState } from "react";
import PlayerDeck from "../player-deck/PlayerDeck";

export default function Player({player, onCardSelect}) {
    return (<PlayerDeck player={player} onCardSelect={onCardSelect} />)
}