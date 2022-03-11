import React, { useState, useContext, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import "./AuthForm.css";

function SignUp() {

    const [error, setError] = useState("");
    const history = useHistory();
    const { signup } = useContext(AuthContext);

    const showModal = useSelector(state => state);

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({
            type: "CLOSEMODAL"
        })
    };

    async function handleSubmit(e) {
        e.preventDefault();

        if (inputs.current[1].value !== inputs.current[2].value) {
            setError("Les mots de passe ne sont pas identiques")
        }
        await signup(inputs.current[0].value, inputs.current[1].value);
        history.push("/loggedHome");
        closeModal();
    };

    const toggleSignIn = () => {
        dispatch({
            type: "TOGGLEIN"
        })
    };

    const inputs = useRef([]);

    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    };

    return (
        <div className={showModal.showSignUp ? 'global-modal' : "hide-modal"}>
            <div onClick={closeModal} className="overlay"></div>
            <div className="container-modal">
                <form onSubmit={handleSubmit} className="form-auth">
                    <h2>INSCRIPTION</h2>
                    <label htmlFor="mail">Votre E-mail</label>
                    <input ref={addInputs} type="email" htmlFor="mail" required />
                    <label htmlFor="psw">Votre mot de passe</label>
                    <input ref={addInputs} type="password" required id='psw' />
                    <label htmlFor="confirm-psw">Confirmez votre mot de passe</label>
                    <input ref={addInputs} type="password" required id='confirm-psw' />
                    {error}
                    <button className='btn-sign'>S'inscrire</button>
                </form>
                <button onClick={closeModal} className="btn-close">X</button>
                <p onClick={toggleSignIn} className="bottom-help-txt">
                    Vous avez déja un compte ?
                </p>
            </div>
        </div>
    );
};

export default SignUp;