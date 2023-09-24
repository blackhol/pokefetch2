import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import axios from "axios";

const PokemonInfo = () => {
    const [pokemon, setPokemon] = useState({});
    let [pokemonName, setPokemonName] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const name = event.target.elements.pokemonName.value;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
             .then(res =>{
                 setPokemon(res.data);
                 setPokemonName(name.name);
                 setSuggestions([]);
                 setError(null);
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

    useEffect(() => {
        if (pokemon.weight) {
            if (pokemon.weight <= 100) {
                pokemon.weight = 0 + "." + pokemon.weight;
            } else {
                pokemon.weight =
                    pokemon.weight.toString().charAt(0) +
                    pokemon.weight.toString().charAt(1) +
                    "." +
                    pokemon.weight.toString().charAt(2);
            }
        }

        if (pokemon.height) {
            if (pokemon.height <= 9) {
                pokemon.height = 0 + "." + pokemon.height;
            } else {
                pokemon.height =
                    pokemon.height.toString().charAt(0) +
                    "." +
                    pokemon.height.toString().charAt(1) +
                    pokemon.height.toString().charAt(2);
            }
        }
    }, [pokemon]);

    return (
        <div className="body">
            <section className="left-side">
                <form onSubmit={handleSubmit}>
                    {pokemon.name ? null : <p>Enter a Pokemon name to search</p>}
                    {pokemon.detail && <p>Error: Pokemon not found</p>}
                    <input
                        type="text"
                        name="pokemonName"
                        value={pokemonName}
                        onChange={(e) => setPokemonName(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
                {loading ? (
                    <LoadingScreen />
                ) : error ? (
                    <p>{error}</p>
                ) : pokemon.name ? (
                    <section className="right-side">
                        <h2>{pokemon.name}</h2>
                        <h2>Pokedex ID: {pokemon.id}</h2>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <p>
                            Height: {pokemon.height}M | Weight: {pokemon.weight}KG
                        </p>
                        <p>Types: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
                        <p>Abilities: {pokemon.abilities.map((a) => a.ability.name).join(", ")}</p>
                        <p>Base Experience: {pokemon.base_experience}</p>
                        <p>Stats:</p>
                        <ul>
                            {pokemon.stats.map((stat) => (
                                <li key={stat.stat.name}>
                                    {stat.stat.name}: {stat.base_stat}
                                </li>
                            ))}
                        </ul>
                    </section>
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