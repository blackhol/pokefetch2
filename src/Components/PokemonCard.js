import React from "react";

const PokemonCard = ({ pokemon, onFavoriteToggle }) => {
    const { name, sprites, height, weight, types, isFavorite } = pokemon;

    const handleFavoriteClick = () => {
        onFavoriteToggle(name);
    };

    return (
        <div className={`pokemon-card ${isFavorite ? "favorite" : ""}`} onClick={handleFavoriteClick}>
            <h2>{name}</h2>
            <img src={pokemon.sprites.front_default} alt={name} />
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Types: {types.map((type) => type.type.name).join(", ")}</p>
        </div>
    );
};export default PokemonCard;