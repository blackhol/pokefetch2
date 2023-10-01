import React from "react";

const PokemonCard = ({ pokemon, onFavoriteToggle }) => {
    const { name, sprites, height, weight, types,abilities,base_experience,stats } = pokemon;

    const handleFavoriteClick = () => {
        onFavoriteToggle(name);
    };

    return (
        <section className="right-side" onClick={handleFavoriteClick}>
            <h2>{pokemon.name}</h2>
            <h2>Pokedex ID: {pokemon.id}</h2>
            <img src={sprites.front_default} alt={pokemon.name} />
            <p>
                Height: {height}M | Weight: {weight}KG
            </p>
            <p>Types: {types.map((t) => t.type.name).join(", ")}</p>
            <p>Abilities: {abilities.map((a) => a.ability.name).join(", ")}</p>
            <p>Base Experience: {base_experience}</p>
            <p>Stats:</p>
            <ul>
                {stats.map((stat) => (
                    <li key={stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                    </li>
                ))}
            </ul>
        </section>
    );
};export default PokemonCard;