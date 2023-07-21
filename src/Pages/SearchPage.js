import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "..//Styles/GetAllPokemon.css";

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [generation, setGeneration] = useState("151");
    const [error, setError] = useState(null);

    const handleGenerationChange = (event) => {
        setGeneration(event.target.value);
    };

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                setError(null); // Reset error state before making a new request
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${generation}`);
                const data = response.data;
                setPokemonList(data.results);
            } catch (err) {
                console.error(err);
                setError("Error fetching data. Please try again later.");
            }
        };

        fetchPokemonList();
    }, [generation]);

    const fetchPokemonDetails = async (pokemonUrl) => {
        try {
            const response = await axios.get(pokemonUrl);
            const data = response.data;
            return data;
        } catch (err) {
            console.error(err);
            setError("Error fetching Pokemon details. Please try again later.");
            return null;
        }
    };

    return (
        <section>
            <h2>Choose the generation you want to see all the pokemon off</h2>
            <select defaultValue="151" value={generation} onChange={handleGenerationChange}>
                {/* Options... */}
            </select>
            {error && <p className="error">{error}</p>}
            {pokemonList.map(async (pokemon) => {
                const pokemonDetails = await fetchPokemonDetails(pokemon.url);
                if (!pokemonDetails) {
                    return null;
                }

                return (
                    <section className="pokemoncard" key={pokemonDetails.name}>
                        <div className="pokemonInfo">
                            <h2 className="pokemonName">{pokemonDetails.name}</h2>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`}
                                alt={pokemonDetails.name}
                            />
                            <p>Types: {pokemonDetails.types.map((t) => t.type.name).join(", ")}</p>
                            <p>Abilities: {pokemonDetails.abilities.map((a) => a.ability.name).join(", ")}</p>
                            <p>Base Experience: {pokemonDetails.base_experience}</p>
                            <p>Stats:</p>
                            <ul>
                                {pokemonDetails.stats.map((stat) => (
                                    <li key={stat.stat.name}>
                                        {stat.stat.name}: {stat.base_stat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                );
            })}
        </section>
    );
};

export default PokemonList;
