import React, { createContext } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import User from './utils/class/User'
import Home from "./pages/Home";
import Login from "./pages/Login";


const App = () => {
    const user = new User()

    const Context = createContext(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route element = { <Home user={user}  data={user.data} /> }  path="/" exact />
                <Route element = { <Login /> }  path="/login" />
            </Routes>
       </BrowserRouter>
    )
}

export default App;
