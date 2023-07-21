import React, {useEffect, useState} from "react";
import "..//Styles/FavoritePokemon.css"; // Add a separate CSS file for styling
const App = () => {
    const [favoritePokemon, setFavoritePokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        const searchedPokemon = favoritePokemon.toLowerCase();
        if (pokemonData.find((p) => p.name === searchedPokemon)) {
            setError(`${searchedPokemon} has already been searched`);
        } else {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setPokemonData((prevData) => [...prevData, { ...data, isFavorite: false }]);
                setError("");
            } catch (error) {
                setError(`${searchedPokemon} was not found`);
            }
        }
    };
    useEffect(() => {
        const storedFavoritePokemon = localStorage.getItem("favoritePokemon");
        if (storedFavoritePokemon) {
            setPokemonData(JSON.parse(storedFavoritePokemon));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favoritePokemon", JSON.stringify(pokemonData));
    }, [pokemonData]);

    const handleFavoriteToggle = (pokemonName) => {
        setPokemonData((prevData) =>
            prevData.map((pokemon) =>
                pokemon.name === pokemonName ? { ...pokemon, isFavorite: !pokemon.isFavorite } : pokemon
            )
        );
    };

    return (
        <div>
            <h1>My Favorite Pokémon</h1>
            <input
                type="text"
                value={favoritePokemon}
                onChange={(e) => setFavoritePokemon(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p>{error}</p>}
            <section className="pokemon-grid">
                {pokemonData.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.name}
                        pokemon={pokemon}
                        onFavoriteToggle={handleFavoriteToggle}
                    />
                ))}
            </section>
        </div>
    );
};

const PokemonCard = ({ pokemon, onFavoriteToggle }) => {
    const { name, sprites, height, weight, types, isFavorite } = pokemon;

    const handleFavoriteClick = () => {
        onFavoriteToggle(name);
    };

    return (
        <div className={`pokemon-card ${isFavorite ? "favorite" : ""}`} onClick={handleFavoriteClick}>
            <h2>{name}</h2>
            <img src={sprites.front_default} alt={name} />
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Types: {types.map((type) => type.type.name).join(", ")}</p>
        </div>
    );
};

export default App;