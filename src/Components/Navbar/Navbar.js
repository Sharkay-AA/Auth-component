import React from 'react';
import { useDispatch } from "react-redux";
import "./Navbar.css";

function Navbar() {

    const dispatch = useDispatch();

    const toggleSignIn = () => {
        dispatch({
            type: "TOGGLEIN"
        })
    };

    const toggleSignUp = () => {
        dispatch({
            type: "TOGGLEUP"
        })
    };

    return (
        <nav className='navbar'>
            <button onClick={toggleSignIn}>Connexion</button>
            <button onClick={toggleSignUp}>Inscription</button>
        </nav>
    )
};

export default Navbar;