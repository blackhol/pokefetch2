import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/1')
            .then((res) => setPokemon(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/main/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
        </div>
    );
};

export default Pokemon;