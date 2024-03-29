import React from 'react';
import Button from "../../Components/Button/Button";
import "./Home.css";
import PokemonGenGrid from "../../Components/PokemonGenGrid/PokemonGenGrid";

const Home = () => {

    return (
        <div className="welcome-container">
            <h1>Welcome to the Pokedex App!</h1>
            <p>Start your journey to become a Pokemon Master.</p>
            <Button text={"Get Started"} URLlink={"/SearchPage"}/>
            <section className={"generationSelect"}>
                <h2>select a pokemon generation to see all the pokemons from that generation</h2>
                <PokemonGenGrid/>
            </section>
        </div>
    );

};

export default Home;
