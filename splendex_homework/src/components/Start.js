import { useEffect, useState } from "react";

export default function Start () {
    const {possibleCardPairs, setPossibleCardPairs} = useState(0);

    useEffect(() => {
        let temp = [];
        for (let i = 3; i <= 10; i++) {
            temp.push(i)
        };
        setPossibleCardPairs(temp)
    }, [])

    return (
        <div>
            <h3>Splendex Memory Game</h3>
            <div className="form-group">
                <label htmlFor="deck-size"></label>
                <select name="deck-size" id="deck-size">
                    <option value="">Select number of card parts</option>
                    {possibleCardPairs.map(number => 
                    <option>

                    </option>)}
                </select>
                <button>Start new game</button>
            </div>
        </div>
    )
}