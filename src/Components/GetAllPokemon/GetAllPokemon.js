import React, {useEffect, useState} from 'react';
import "./GetAllPokemon.css";
import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const PokemonList = () => {
    let [pokemonList, setPokemonList] = useState([]);
    const [generation, setGeneration] = useState("151");
    const [error, setError] = useState("");
    let [loading, setLoading] = useState(false);

    const handleGenerationChange = (event) => {
        setGeneration(event.target.value);
    };
    const fetchPokemonList = async () => {
        setLoading(true)
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${generation}`)
            setLoading(false);
            setPokemonList(result.data.results);
        }
        catch (error){
            setError("kan de pokemonlijsten niet ophalen");
            setLoading(false);
        }
    };

    useEffect(() => {
        setError("");
        setLoading(true);
        fetchPokemonList().then(() => {
        });
    }, [generation]);

    return (
        <section>
            <h2>Choose the generation you want to see all the pokemon off</h2>
            <select defaultValue="151" value={generation} onChange={handleGenerationChange}>
                <option value="151">Generation 1</option>
                <option value="100&offset=151">Generation 2</option>
                <option value="135&offset=251">Generation 3</option>
                <option value="107&offset=386">Generation 4</option>
                <option value="156&offset=493">Generation 5</option>
                <option value="72&offset=649">Generation 6</option>
                <option value="88&offset=721">Generation 7</option>
                <option value="96&offset=809">Generation 8</option>
                <option value="103&offset=905">Generation 9</option>
            </select>
            {error && <p className="error">{error}</p>}
            {loading ? (
                <LoadingScreen/>
            ) : (
                <div className="pokemonList">
                    {pokemonList.map((pokemon) => (
                        <section className="pokemoncard" key={pokemon.name}>
                            <div className="pokemonInfo">
                                <h2 className="pokemonName">{pokemon.name}</h2>
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                                        pokemon.url.split('/')[6]
                                    }.png`}
                                    alt={pokemon.name}
                                />
                            </div>
                        </section>
                    ))}
                </div>
            )}
        </section>
    );
};

export default PokemonList;
