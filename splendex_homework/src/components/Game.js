import './Game.css';
import { useEffect, useState } from "react";

import nameOfCards from "../utils/cards";

export default function Game({
    selectedCarPairs
}) {

    const [shuffleCards, setShuffleCards] = useState([])

    useEffect(() => {
        const tempForGamingCards = [];
        while (tempForGamingCards.length == selectedCarPairs) {
            let random = Math.floor(Math.random() * nameOfCards.length);
            let cardName = nameOfCards[random]
            if (!tempForGamingCards.includes(cardName)) {
                tempForGamingCards.push(cardName)
            }
        }

        const tempForGamingCardsLength = tempForGamingCards.length;
        for (let i = 0; i < tempForGamingCardsLength; i++) {
            tempForGamingCardsLength.push(tempForGamingCardsLength[i])
        }

        const shuffleCardsTemp = shuffle(tempForGamingCards);

        setShuffleCards(shuffleCardsTemp)

    }, [])

    function shuffle(array) {
        const currentIndex = array.length;
        let randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    return (
        <div className="container">
            <div class="scene">
                {shuffleCards.length !== 0 &&
                    <div class="card">
                        <div class="card__face card__face--front">front</div>
                        <div class="card__face card__face--back">back</div>
                    </div> 
                }
            </div>
        </div>
    )
}