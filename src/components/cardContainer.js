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

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min) + min)
    }

    function shuffleDeck () {

        let newDeck = [];
        
        while(newDeck.length !== 12) {
            let number = getRandomNumber(1, 13);
            
            if(newDeck.includes(number)) {
                continue;
            } else {
                newDeck.push(number);
            }
            
        }

        console.log(newDeck);

        setDeck(newDeck);
    }

    function userClicked() {
        return true;
    }

    return (
        <div className='cardContainer'>
            <Card1 shuffleDeck={shuffleDeck} index={deck[0]} userClicked={userClicked}/>
            <Card2 shuffleDeck={shuffleDeck} index={deck[1]}/>
            <Card3 shuffleDeck={shuffleDeck} index={deck[2]}/>
            <Card4 shuffleDeck={shuffleDeck} index={deck[3]}/>
            <Card5 shuffleDeck={shuffleDeck} index={deck[4]}/>
            <Card6 shuffleDeck={shuffleDeck} index={deck[5]}/>
            <Card7 shuffleDeck={shuffleDeck} index={deck[6]}/>
            <Card8 shuffleDeck={shuffleDeck} index={deck[7]}/>
            <Card9 shuffleDeck={shuffleDeck} index={deck[8]}/>
            <Card10 shuffleDeck={shuffleDeck} index={deck[9]}/>
            <Card11 shuffleDeck={shuffleDeck} index={deck[10]}/>
            <Card12 shuffleDeck={shuffleDeck} index={deck[11]}/>
        </div>
    )
}
