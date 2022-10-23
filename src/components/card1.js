import React from 'react'
import { useState, useEffect, useRef } from 'react'


export default function Card1(props) {

    const {shuffleDeck} = props;

    const cardClass = `card card${props.index}`
    
    return (
        <div className={cardClass} onClick={props.userClicked} data-id='unclicked'> {props.index}</div>
    )
}