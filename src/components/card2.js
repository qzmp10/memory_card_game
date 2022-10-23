import React from 'react'
import { useState, useEffect, useRef } from 'react'


export default function Card2(props) {
    const {shuffleDeck} = props;

    const cardClass = `card card${props.index}`
    
    return (
        <div className={cardClass} onClick={shuffleDeck}> {props.index}</div>
    )
}