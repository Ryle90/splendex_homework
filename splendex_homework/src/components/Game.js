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

    const [shuffleCards, setShuffleCards] = useState([]);
    const [currentCard, setCurrentCard] = useState(-1);

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
            tempForGamingCards.push(tempForGamingCards[i])
        }

        const shuffleCardsTemp = shuffle(tempForGamingCards);

        setShuffleCards(shuffleCardsTemp)

    }, [])

    function showCard(index) {
        setCurrentCard(index)
    }

    function getImage(card) {
        switch (card) {
            case 'angular':
                return angular;
            case 'd3':
                return d3;
            case 'jenkins':
                return jenkins;
            case 'postcss':
                return postcss;
            case 'react':
                return react;
            case 'redux':
                return redux;
            case 'sass':
                return sass;
            case 'splendex':
                return splendex;
            case 'ts':
                return ts;
            case 'webpack':
                return webpack;
        }
        return angular;
    }

    return (
        <div className="container card-container">
            <div className="scene">
                {shuffleCards.length !== 0 &&
                    shuffleCards.map((card, index) => (
                        <div key={index} className="card" onClick={() => {showCard(index)}}>
                            {currentCard === index &&
                                <img src={getImage(card)} alt="pic" />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}