import React, { useEffect, useState } from "react";
import "./FavoritePokemon.css";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Button from "../../Components/Button/Button";
import InputField from "../../Components/InputField/InputField";
import axios from "axios";

const App = () => {
    const [favoritePokemon, setFavoritePokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        const searchedPokemon = favoritePokemon.toLowerCase();
        if (pokemonData.find((p) => p.name === searchedPokemon)) {
                setError(`${searchedPokemon} is al gezocht`);
        }
        else {
            setLoading(true);
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`);
                const data = result.data;
                setPokemonData((prevData)=>[...prevData, { ...data, isFavorite: false }]);
                setLoading(false);
            }
            catch (error){
                setError(`${searchedPokemon} is niet gevonden, controleer je spelling`);
                setLoading(false);
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

    const handleRemovePokemon = (pokemonName) => {
        setPokemonData((prevData) => prevData.filter((pokemon) => pokemon.name !== pokemonName));
    };

    return (
        <div className="app-container">
            <h1>My Favorite Pokémon</h1>
            <div className="center-container">
                <InputField
                    type={"text"}
                    value={favoritePokemon}
                    onChange={(e) => setFavoritePokemon(e.target.value)}
                />
                <Button onClickFunction={handleSearch} text={"Search"} />
            </div>
            {error && <p>{error}</p>}
            {loading && <LoadingScreen />}
            <section className="pokemon-grid">
                {pokemonData.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.name}
                        pokemon={pokemon}
                        onFavoriteToggle={handleFavoriteToggle}
                        onRemovePokemon={handleRemovePokemon}
                        currentPage={"favoritepokemons"}
                    />
                ))}
            </section>
        </div>
    );
};

export default App;