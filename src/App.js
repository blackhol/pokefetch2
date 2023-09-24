import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./Pages/SearchPage/SearchPage";
import FavoritePokemon from "./Pages/FavoritePokemon/FavoritePokemon";
import AllPokemon from "./Pages/AllPokemon";
import LogInPage from "./Pages/LogInPage";
import Home from "./Pages/Home/Home";
import RegisterPage from "./Pages/RegisterPage";

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <section className="container">
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/SearchPage" element={<SearchPage />} />
                    <Route path="/FavoritePokemon" element={<FavoritePokemon />} />
                    <Route path="/AllPokemon" element={<AllPokemon />} />
                    <Route path="/LogInPage" element={<LogInPage />} />
                    <Route path="/Register" element={<RegisterPage />} />
                </Routes>
            </section>
        </React.Fragment>
    );
}

export default App;
