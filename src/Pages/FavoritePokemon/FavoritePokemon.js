import React, {useEffect, useState} from "react";
import "./FavoritePokemon.css";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Button from "../../Components/Button/Button";
import InputField from "../../Components/InputField/InputField";
const App = () => {
    const [favoritePokemon, setFavoritePokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        const searchedPokemon = favoritePokemon.toLowerCase();
        if (pokemonData.find((p) => p.name === searchedPokemon)) {
            setError(`${searchedPokemon} has already been searched`);
        } else {
            setLoading(true);
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                    setLoading(false);
                }
                setLoading(false);
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
            <InputField
                type={"text"}
                value={favoritePokemon}
                onChange={(e) => setFavoritePokemon(e.target.value)}
            ></InputField>
            <Button onClickFunction={handleSearch} text={"Search"}></Button>
            {error && <p>{error}</p>}
            {loading ? (
                <LoadingScreen />
            ) : (
            <section className="pokemon-grid">
                {pokemonData.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.name}
                        pokemon={pokemon}
                        onFavoriteToggle={handleFavoriteToggle}
                    />
                ))}
            </section>
                )}
        </div>
    );
};


export default App;