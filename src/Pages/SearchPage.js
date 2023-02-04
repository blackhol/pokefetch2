import React, {useState, useEffect} from "react";
import "..//Styles/SearchPage.css";

const PokemonInfo = () => {
    const [pokemon, setPokemon] = useState({});
    let [pokemonName, setPokemonName] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        if (!pokemonName) return;

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((res) => res.json())
            .then((data) => setPokemon(data));
    }, [pokemonName]);

    useEffect(() => {
        if (!pokemonName) return setSuggestions([]);

        fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0&name=${pokemonName}`)
            .then((res) => res.json())
            .then((data) => setSuggestions(data.results.map((p) => p.name)));
    }, [pokemonName]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setPokemonName(event.target.elements.pokemonName.value);
    };
    let handleSuggestionClick = (name) => {
        setPokemonName(name);
        setSuggestions([]);
    };
    useEffect(() => {
        if (pokemon.weight) {
            if (pokemon.weight <= 100) {
                pokemon.weight = 0 + '.' + pokemon.weight;
            } else {
                pokemon.weight = pokemon.weight.toString().charAt(0) + pokemon.weight.toString().charAt(1) + "." + pokemon.weight.toString().charAt(2);
            }
        }
        if (pokemon.height) {
            if (pokemon.height <= 9) {
                pokemon.height = 0 + '.' + pokemon.height;
            } else {
                pokemon.height = pokemon.height.toString().charAt(0) + "." + pokemon.height.toString().charAt(1) + pokemon.height.toString().charAt(2);
            }
        }
    }, [pokemon]);
    return (
        <div className="body">
            <div className="left-side" style={{ width: "50%" }}>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="pokemonName" value={pokemonName}
                           onChange={(e) => setPokemonName(e.target.value)}/>
                    <button type="submit">Search</button>
                </form>
                {pokemon.name ? (
                    <div className="right-side" style={{ width: "50%", float: "right" }}>
                        <h2>{pokemon.name}</h2>
                        <h2>pokedexID:{pokemon.id}</h2>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                        <p>
                            Height: {pokemon.height}M | Weight: {pokemon.weight}KG
                        </p>
                        <p>
                            Types: {pokemon.types.map(t => t.type.name).join(", ")}
                        </p>
                    </div>
                ) : null}
            </div>
                {suggestions.length > 0 && (
                    <ul className="listOfPokemon">
                        {suggestions.map((name) => (
                            <li key={name} onClick={() => handleSuggestionClick(name)}>
                                {name}
                            </li>
                        ))}
                    </ul>
                )}
                {pokemon.name ? null : (
                    <p>Enter a Pokemon name to search</p>
                )}
            </div>

    );
};

export default PokemonInfo;
