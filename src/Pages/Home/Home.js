import React from 'react';
import SignIn from '../../Components/AuthForm/SignIn';
import SignUp from '../../Components/AuthForm/SignUp';
import Navbar from '../../Components/Navbar/Navbar';
import "./Home.css";

function Home() {
    return (
        <div className='global-container'>
            <Navbar />
            <div className="content-container">
                <h1>Bienvenue sur le site.</h1>
                <p>Authentifiez vous pour accéder aux fonctionnalités.</p>
            </div>
            <SignUp />
            <SignIn />
        </div>
    )
};

export default Home;