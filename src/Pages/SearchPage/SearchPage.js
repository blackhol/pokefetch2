import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import axios from "axios";
import Button from "../../Components/Button/Button";
import InputField from "../../Components/InputField/InputField";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

const PokemonInfo = () => {
    const [pokemon, setPokemon] = useState({});
    let [pokemonName, setPokemonName] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const name = event.target.elements.pokemonName.value;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
             .then(res =>{
                 setPokemon(res.data);
                 setPokemonName(name.name);
                 setSuggestions([]);
                 setError("");
                 setLoading(false);
             })
            .catch((error) => {
                setPokemon({});
                setError("pokemon not found")
                setLoading(false);
            });
    };

    useEffect(() => {
        if (!pokemonName) return setSuggestions([]);
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0&name=${pokemonName}`)
             .then(res =>{
                 setSuggestions(res.data.results.map((p) => p.name));
             })
    }, [pokemonName]);

    let handleSuggestionClick = (name) => {
        setPokemonName(name);
        setSuggestions([]);
    };
    return (
        <div className="body">
            <section className="left-side">
                <form onSubmit={handleSubmit}>
                    {pokemon.name ? null : <p>Enter a Pokemon name to search</p>}
                    {pokemon.detail && <p>Error: Pokemon not found</p>}
                    <InputField
                    type={"text"}
                    name={"pokemonName"}
                    value={pokemonName}
                    onChange={(e) => setPokemonName(e.target.value)}
                    ></InputField>
                    <Button buttonType={"submit"} text={"Search"}></Button>
                </form>
                {loading ? (
                    <LoadingScreen />
                ) : error ? (
                    <p>{error}</p>
                ) : pokemon.name ? (
                    <PokemonCard pokemon={pokemon}></PokemonCard>
                ) : null}
            </section>
            {suggestions.length > 0 && (
                <ul className="listOfPokemon">
                    {suggestions.map((name) => (
                        <li key={name} onClick={() => handleSuggestionClick(name)}>
                            {name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PokemonInfo;