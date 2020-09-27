import React from "react";
import useFetch from "../../_hooks/useFetch";
import { toSentenceCase } from "../../_utils/strings";
import Loading from "../loading/Loading";

export default function Move({move, strength}) {
    const {data, loading, error} = useFetch(move.move.url);

    if(loading || !move) return (
    <li></li>);

    return (
        <li className="list-group-item">{toSentenceCase(data.name.replace("-"," "))}</li>
    )
}