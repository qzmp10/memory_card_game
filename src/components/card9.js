import React from 'react'


export default function Card9(props) {
    const {shuffleDeck} = props;

    const cardClass = `card card${props.index}`
    
    return (
        <div className={cardClass} onClick={props.userClicked} data-id='unclicked'> {props.index}</div>
    )
}