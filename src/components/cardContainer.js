import React, { useState, useEffect, useRef } from 'react'
import Card1 from './card1'
import Card10 from './card10'
import Card11 from './card11'
import Card12 from './card12'
import Card2 from './card2'
import Card3 from './card3'
import Card4 from './card4'
import Card5 from './card5'
import Card6 from './card6'
import Card7 from './card7'
import Card8 from './card8'
import Card9 from './card9'

export default function CardContainer(props) {

    const [deck, setDeck] = useState([]);

    const score = useRef(0);
    const bestScore = useRef(0);

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min) + min)
    }

    function shuffleDeck() {

        let newDeck = [];

        while (newDeck.length !== 12) {
            let number = getRandomNumber(1, 13);

            if (newDeck.includes(number)) {
                continue;
            } else {
                newDeck.push(number);
            }

        }

        console.log(newDeck);

        setDeck(newDeck);
    }

    const userClicked = (e) => {
        if (e.target.dataset.id === 'unclicked') {
            shuffleDeck();
            score.current = score.current + 1;
            props.callbackFn(score.current);
            e.target.dataset.id = 'clicked';
        } else {
            shuffleDeck();
            resetCards();
            score.current = 0;
            props.callbackFn(score.current);
        }
    }

    function resetCards() {
        let cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.dataset.id = 'unclicked';
        })
    }

    return (
        <div className='cardContainer'>
            <Card1 index={deck[0]} userClicked={userClicked} />
            <Card2 index={deck[1]} userClicked={userClicked} />
            <Card3 index={deck[2]} userClicked={userClicked} />
            <Card4 index={deck[3]} userClicked={userClicked} />
            <Card5 index={deck[4]} userClicked={userClicked} />
            <Card6 index={deck[5]} userClicked={userClicked} />
            <Card7 index={deck[6]} userClicked={userClicked} />
            <Card8 index={deck[7]} userClicked={userClicked} />
            <Card9 index={deck[8]} userClicked={userClicked} />
            <Card10 index={deck[9]} userClicked={userClicked} />
            <Card11 index={deck[10]} userClicked={userClicked} />
            <Card12 index={deck[11]} userClicked={userClicked} />
        </div>
    )
}
