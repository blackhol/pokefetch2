import React from "react";
import NavBar from "./Components/NavBar";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import FavoritePokemon from "./Pages/FavoritePokemon";
import AllPokemon from "./Pages/AllPokemon";
import LogInPage from "./Pages/LogInPage";

function App() {
    return (
        <React.Fragment>
            <NavBar/>
            <div className="container">
                <Routes>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/SearchPage" element={<SearchPage/>}/>
                    <Route path="/FavoritePokemon" element={<FavoritePokemon/>}/>
                    <Route path="/AllPokemon" element={<AllPokemon/>}/>
                    <Route path="/LogInPage" element={<LogInPage/>}/>
                </Routes>
            </div>
        </React.Fragment>
    )
}
export default App;