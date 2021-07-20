import './Game.css';
import { useEffect, useState } from "react";

import angular from '../assets/cards/angular.png';
import d3 from '../assets/cards/d3.png';
import jenkins from '../assets/cards/jenkins.png';
import postcss from '../assets/cards/postcss.png';
import react from '../assets/cards/react.png';
import redux from '../assets/cards/redux.png';
import sass from '../assets/cards/sass.png';
import splendex from '../assets/cards/splendex.png';
import ts from '../assets/cards/ts.png';
import webpack from '../assets/cards/webpack.png';

import nameOfCards from "../utils/cards";

export default function Game({
    selectedCarPairs
}) {

    const [shuffleCards, setShuffleCards] = useState([])

    function shuffle(array) {
        let currentIndex = array.length;
        let randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    useEffect(() => {
        const tempForGamingCards = [];
        while (tempForGamingCards.length !== selectedCarPairs) {
            let random = Math.floor(Math.random() * nameOfCards.length);
            let cardName = nameOfCards[random]
            if (!tempForGamingCards.includes(cardName)) {
                tempForGamingCards.push(cardName)
            }
        }

        const tempForGamingCardsLength = tempForGamingCards.length;
        for (let i = 0; i < tempForGamingCardsLength; i++) {
            tempForGamingCards.push(tempForGamingCardsLength[i])
        }

        const shuffleCardsTemp = shuffle(tempForGamingCards);

        setShuffleCards(shuffleCardsTemp)

    }, [])


    return (
        <div className="container card-container">
            <div className="scene">
                {shuffleCards.length !== 0 &&
                    shuffleCards.map((card, index) => (
                        <div key={index} className="card">
                            <div className="card__face card__face--front"></div>
                            <div className="card__face card__face--back">back</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}