import './Start.css';
import { useEffect, useState } from "react";

export default function Start ({
    selectedCarPairs,
    setSelectedCarPairs,
    setIsGaming
}) {
    const [possibleCardPairs, setPossibleCardPairs] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let temp = [];
        for (let i = 3; i <= 10; i++) {
            temp.push(i)
        };
        setPossibleCardPairs(temp)
    }, [])

    function handleChange(event) {
        setSelectedCarPairs(parseInt(event.target.value))
    }

    function handleValidation() {
        let isValid = true
        if (selectedCarPairs === 0) {
            setErrorMessage('Choose a value');
            isValid = false
        }
        return isValid
    }

    function handleFocus () {
        setErrorMessage('')
    }

    function startGame () {
        if(handleValidation()) {
            setIsGaming(true)
        }
    }

    return (
        <div className="container start-container">
            <h3 id="start-title">Splendex Memory Game</h3>
            <div className="form-group start-form-group">
                <label htmlFor="deck-size">Deck size</label>
                <select
                    className={`form-control ${errorMessage === '' ? '' : 'is-invalid'}`}
                    name="deck-size" 
                    id="deck-size"
                    onChange={handleChange}
                    onBlur={handleValidation}
                    onFocus={handleFocus}
                >
                    <option value="0">Select number of card parts</option>
                    {possibleCardPairs.map((number) =>( 
                    <option
                        value={number}
                        key={number}
                    >
                        {number}
                    </option>))}
                </select>
                <div className="invalid-feedback">
                    {errorMessage}
                </div>
            </div>
            <button className="btn btn-warning start-button" onClick={startGame}>Start new game</button>
        </div>
    )
}