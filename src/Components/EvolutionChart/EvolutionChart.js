import {useEffect, useState} from "react";
import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

function EvolutionChart({id}) {
    const [evolutionChain, setEvolutionChain] = useState("")

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/evolution-chain/' + id);
                setEvolutionChain(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [id]);

    return (
        <div className="center-container-encounter">
            {evolutionChain ? (
                <div>
                    This Pokémon will evolve into: {evolutionChain.chain.evolves_to[0].species.name}
                </div>
            ) : (
                <LoadingScreen></LoadingScreen>
            )}
        </div>
    );
}

export default EvolutionChart;