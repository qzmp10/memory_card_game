import React from 'react'


export default function Card12(props) {
    const {shuffleDeck} = props;

    const cardClass = `card card${props.index}`
    
    return (
        <div className={cardClass} onClick={shuffleDeck}> {props.index}</div>
    )
}