import React from 'react';
import './scss/style.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
            </Routes>
        </Router>
    );
};

export default App;