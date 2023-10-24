import React from "react";
import StatsBars from "../../Components/StatsBars/StatsBars";
import Button from "../Button/Button";
import TypeResistanceChart from "../TypeResistanceChart/TypeResistanceChart";
import './PokemonCard.css';
import EvolutionChart from "../EvolutionChart/EvolutionChart";
const PokemonCard = ({ pokemon, onFavoriteToggle, onRemovePokemon, currentPage }) => {
    const { name, sprites, height, weight, types, abilities, base_experience, stats, isFavorite } = pokemon;
    const handleFavoriteClick = () => {
        onFavoriteToggle(name);
    };

    const handleRemoveClick = () => {
        onRemovePokemon(name);
    };
    return (
        <section className="right-side">
            <h2>{pokemon.name}</h2>
            <h2>Pokedex ID: {pokemon.id}</h2>
            <img src={sprites.front_default} alt={pokemon.name} />
            <p>
                Height: {(height / 10).toLocaleString('en-US', { minimumFractionDigits: 1 })}M | Weight: {(weight / 10).toLocaleString('en-US', { minimumFractionDigits: 1 })}KG
            </p>
            <p>Types: {types.map((t) => t.type.name).join(", ")}</p>
            <p>Abilities: {abilities.map((a) => a.ability.name).join(", ")}</p>
            <p>Base Experience: {base_experience}</p>
            <p>Stats:</p>
            <div className="centered-stats-bars">
                <StatsBars stats={stats}></StatsBars>
            </div>
            {currentPage === "searchpage" && (
                <div>
                    <EvolutionChart id={pokemon.id}></EvolutionChart>
                    <TypeResistanceChart type={types[0].type.name}></TypeResistanceChart>
                </div>
            )}
            {currentPage === "favoritepokemons" && (
                <div>
                    <Button onClickFunction={handleFavoriteClick} text={isFavorite ? "Unfavorite" : "Favorite"} />
                    <Button onClickFunction={handleRemoveClick} text="Remove this Pokemon" />
                </div>
            )}


        </section>
    );
};

export default PokemonCard;
