import React, {useState} from "react";

const App = () => {
    const [favoritePokemon, setFavoritePokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        if (pokemonData.find((p) => p.name === favoritePokemon)) {
            setError(`${favoritePokemon} has already been searched`);
        } else {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${favoritePokemon.toLowerCase()}`);
                const data = await response.json();
                setPokemonData([...pokemonData, data]);
                setError("");
            } catch (error) {
                setError(`${favoritePokemon} was not found`);
            }
        }
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
            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "10px"}}>
                {pokemonData.map((pokemon) => (
                    <div key={pokemon.name}>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                        <p>Height: {pokemon.height}</p>
                        <p>Weight: {pokemon.weight}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
