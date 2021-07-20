import './Game.css';
import { useEffect, useState } from "react";

import nameOfCards from "../utils/cards";
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

export default function Game({
    selectedCarPairs
}) {

    const [shuffleCards, setShuffleCards] = useState([]);
    const [currentTire, setCurrentTire] = useState(0);
    const [best, setBest] = useState(null)

    useEffect(() => {
        getRandomCards()
    }, [])

    useEffect(() => {
        let isEnd = true
        shuffleCards.forEach(card => {
            if(card.state !== 'find') {
                isEnd = false
            }
        })
        if (isEnd) {
            if (best === null) {
                setBest(currentTire)
            }
            if (currentTire < best) {
                setBest(currentTire)
            }
            setTimeout(() => {
                getRandomCards()
            }, 1500)
        }
    }, [shuffleCards])

    function getRandomCards() {
        setCurrentTire(0)
        const tempForGamingCards = [];
        while (tempForGamingCards.length !== selectedCarPairs) {
            let random = Math.floor(Math.random() * nameOfCards.length);
            let cardName = nameOfCards[random]
            if (!tempForGamingCards.map(x => x.name).includes(cardName)) {
                tempForGamingCards.push({ name: cardName, state: 'off' })
            }
        }

        const tempForGamingCardsLength = tempForGamingCards.length;
        for (let i = 0; i < tempForGamingCardsLength; i++) {
            tempForGamingCards.push({ name: tempForGamingCards[i].name, state: 'off' })
        }

        const shuffleCardsTemp = shuffle(tempForGamingCards);

        setShuffleCards(shuffleCardsTemp)
    }

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
    }

    function onClick(index) {
        if (shuffleCards.filter(x => x.state === 'on').length === 2)
            return;

        if (shuffleCards[index].state === 'on' || shuffleCards[index].state === 'find')
            return;

        shuffleCards[index].state = 'on';
        const on = shuffleCards.filter(x => x.state === 'on');

        setTimeout(() => {
            if (on.length === 2) {
                setCurrentTire(currentTire + 1)
                if (on[0].name === on[1].name) {
                    on[0].state = 'find';
                    on[1].state = 'find';
                } else {
                    on[0].state = 'off';
                    on[1].state = 'off';
                }
            }
            setShuffleCards([...shuffleCards]);
        }, 1500)

        setShuffleCards([...shuffleCards]);
    }

    return (
        <div className="container">
            <div className="game-stats mb-3">
                <p>Current tires: <strong>{currentTire}</strong></p>
                <p>Best: {best !== null && <strong>{best}</strong>}</p>
                <button className="btn btn-dark" onClick={getRandomCards}>Restart</button>
            </div>
            <div className="container card-container">
                <div className="scene">
                    {shuffleCards.length !== 0 &&
                        shuffleCards.map((card, index) => (
                            <div key={index} className="card" onClick={() => onClick(index)}>
                                {
                                    card.state === 'on' && <img src={getImage(card.name)} height="160px" width="160px" />
                                }
                                {
                                    card.state === 'find' && <img src={getImage(card.name)} height="160px" width="160px" style={{ opacity: 0.6 }} />
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}