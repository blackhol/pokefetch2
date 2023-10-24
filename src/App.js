import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {Navigate, Route, Routes} from "react-router-dom";
import SearchPage from "./Pages/SearchPage/SearchPage";
import FavoritePokemon from "./Pages/FavoritePokemon/FavoritePokemon";
import AllPokemon from "./Pages/AllPokemon/AllPokemon";
import LogInPage from "./Pages/LogInPage/LogInPage";
import Home from "./Pages/Home/Home";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import NotFound from "./Pages/NotFound/NotFound";
import {useAuth} from "./Context/AuthContext";


function App() {
    const { currentUser} = useAuth();

    return (
        <React.Fragment>
            <NavBar />
            <section className="container">
                <Routes>
                    <Route path={"/"}   element={<Home/>} />
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/SearchPage" element={<SearchPage/>} />
                    <Route path="/FavoritePokemon" element={currentUser ? <FavoritePokemon/> : <Navigate to= "/LogInPage"/>} />
                    <Route path="/AllPokemon" element={<AllPokemon/>} />
                    <Route path="/LogInPage" element={<LogInPage/>} />
                    <Route path="/Register" element={<RegisterPage/>} />
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
            </section>
        </React.Fragment>
    );
}

export default App;
