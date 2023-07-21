import react from 'react'
import "..//Styles/PokemonGenGrid.css";
import pokemonGEN1 from '..//Assets/PokemonGEN1.jpg';
import pokemonGEN2 from '..//Assets/PokemonGEN2.jpg';
import pokemonGEN3 from '..//Assets/PokemonGEN3.jpg';
import pokemonGEN4 from '..//Assets/PokemonGEN4.jpg';
import pokemonGEN5 from '..//Assets/PokemonGEN5.jpg';
import pokemonGEN6 from '..//Assets/PokemonGEN6.jpg';
import pokemonGEN7 from '..//Assets/PokemonGEN7.jpg';
import pokemonGEN8 from '..//Assets/PokemonGEN8.jpg';
import pokemonGEN9 from '..//Assets/PokemonGEN9.jpg';

function PokemonGenGrid() {
    const pokemonImages = [
        pokemonGEN1,
        pokemonGEN2,
        pokemonGEN3,
        pokemonGEN4,
        pokemonGEN5,
        pokemonGEN6,
        pokemonGEN7,
        pokemonGEN8,
        pokemonGEN9,

    ];
    return (
        <article className="pokemonGen-grid">
            {pokemonImages.map((imageUrl, index) => (
                <div key={index} className="pokemon-item">
                    <img className={"cover"} src={imageUrl} alt={`PokemonGEN ${index + 1}`}/>
                    <a className={"cover"} href={"http://localhost:3000/SearchPage"}>
                        <p>PokemonGEN {index + 1}</p>
                    </a>
                </div>
            ))}
        </article>
    );
}

export default PokemonGenGrid;