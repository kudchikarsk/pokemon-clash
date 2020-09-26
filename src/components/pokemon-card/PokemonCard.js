import React from "react";
import useFetch from "../../_hooks/useFetch";
import { toSentenceCase } from "../../_utils/strings";

const defaultImage = `/images/poke.gif`;

export default function PokemonCard({ name }) {
    const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let image = data? data.sprites.other["official-artwork"].front_default : defaultImage;

    if (!data) return (
        <div className="card">
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{toSentenceCase(name)}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )

    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{toSentenceCase(name)}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    );
}