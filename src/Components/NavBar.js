import {FaBars, FaTimes} from "react-icons/fa"
import {useRef} from "react";
import pokefetchLogo from '..//Assets/PokefetchLogo.png';
import "..//Styles/main.css";
import {Link} from "react-router-dom";

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    return (
        <header>
            <section>
                <Link to="/Home">
                    <img className="navLogo" src={pokefetchLogo} alt="pokefetch logo"/>
                </Link>
            </section>
            <nav ref={navRef}>

                <Link to="/Home">Home</Link>
                <Link to="/SearchPage">Search Pokemon</Link>
                <Link to="/AllPokemon">All Pokemon</Link>
                <Link to="/FavoritePokemon">Favorite Pokemon</Link>
                <Link to="/LogInPage">LogIn</Link>
                <button className="nav-btn nav-close-btn " onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}
export default Navbar;