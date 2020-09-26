import React, { useEffect, useState } from 'react';
import './Laboratory.css';
import { PokemonCard } from '../../components';
import useFetch from '../../_hooks/useFetch';
import { sampleSize } from 'lodash';

export default function Laboratory() {
    const [name, setName] = useState("");
    const [cards, setCards] = useState([]);
    const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/?limit=60`, { results: [] });

    useEffect(() => {
        setName(localStorage.getItem("name"));
        setCards(sampleSize(data.results, 3));
    }, [data]);

    const imgStyle={
        width:'100px'
    };

    return (
        <div>
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
            <div className="card-deck row row-cols-1 row-cols-md-3">
                {cards.map(c => (
                    <div className="col">
                        <PokemonCard name={c.name} key={c.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}