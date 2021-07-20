import { useState, useEffect } from "react";

export default function SelectMenu({
    setSelectedCarPairs,
    handleValidation,
    errorMessage,
    setErrorMessage
}) {
    const [possibleCardPairs, setPossibleCardPairs] = useState([]);

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

    function handleFocus () {
        setErrorMessage('')
    }

    return (        

        <div className="form-group start-form-group">
            <label id="deck-label" htmlFor="deck-size">Deck size</label>
            <select
                className={`form-control ${errorMessage === '' ? '' : 'is-invalid'}`}
                name="deck-size"
                id="deck-size"
                onChange={handleChange}
                onBlur={handleValidation}
                onFocus={handleFocus}
            >
                <option value="0">Select number of card parts</option>
                {possibleCardPairs.map((number) => (
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
    )
}