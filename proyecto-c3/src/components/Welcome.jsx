import "./App.css";
import Welcome from "./components/Welcome";
import React from "react";

const Welcome = () => {
    function handleButton() {
        return alert ("Hola soy un evento");
    }

    return (
        <div>
            <h1>Comision 002</h1>
            <button onClick={handleButton}>Mostrar mensaje</button>
        </div>
    );
};

export default Welcome;

