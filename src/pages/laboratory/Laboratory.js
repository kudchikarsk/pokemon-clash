import React, { useEffect, useState } from 'react';
import './Laboratory.css';
import { PokemonCard } from '../../components';
import { sampleSize } from 'lodash';
import { useHistory } from 'react-router-dom';
import { addPlayerCard } from '../../_utils/player-utils';
import { starterPack } from '../../_utils/pokeapi-utils';

export default function Laboratory() {
    const [name, setName] = useState("");
    const [cards, setCards] = useState([]);    
    const history = useHistory();
    useEffect(() => {
        setName(localStorage.getItem("name"));
        setCards(sampleSize(starterPack, 3));
    }, []);

    function gotoTraining({id,pokemon, species}) {
        addPlayerCard({id, pokemon, species})        
        history.push("/training");
    }

    return (
        <section>
             <div className="card mb-3 bg-danger text-white">
                <div className="row no-gutters">
                    <div className="col-md-1">
                        <img src="/images/Samuel_Oak_Masters.png" className="card-img" alt="..." />
                    </div>
                    <div className="col-md-11">
                        <div className="card-body">
                            <h5 className="card-title">You're late {name}!</h5>
                            <p className="card-text">Pick one.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-deck row justify-content-center mb-3">
                {cards.map(c => (
                    <div className="col-md-4 col-lg-3">
                        <PokemonCard key={c} id={c} onSelect={gotoTraining} />
                    </div>
                ))}
            </div>
        </section>
    );
}