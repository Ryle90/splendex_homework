import './Start.css';
import { useState } from "react";
import SelectMenu from './SelectMenu';

export default function Start ({
    selectedCarPairs,
    setSelectedCarPairs,
    setIsGaming
}) {

    const [errorMessage, setErrorMessage] = useState('');

    function handleValidation() {
        let isValid = true
        if (selectedCarPairs === 0) {
            setErrorMessage('Choose a value');
            isValid = false
        }
        return isValid
    }

    function startGame () {
        if(handleValidation()) {
            setIsGaming(true)
        }
    }

    return (
        <div className="container start-container">
            <h3 id="start-title">Splendex Memory Game</h3>
            <SelectMenu 
                selectedCarPairs={selectedCarPairs}
                setSelectedCarPairs={setSelectedCarPairs}
                handleValidation={handleValidation}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
            />
            <button className="btn btn-warning start-button" onClick={startGame}>Start new game</button>
        </div>
    )
}