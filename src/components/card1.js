import React from 'react'
import { useState, useEffect, useRef } from 'react'


export default function Card1(props) {

    const {shuffleDeck} = props;

    const cardClass = `card card${props.index}`
    
    return (
        <div className={cardClass} onClick={props.userClicked} data-id='unclicked'>
            <img className='img' src='https://static.jojowiki.com/images/thumb/4/4a/latest/20210422070411/Giorno_Giovanna_Infobox_Anime.png/400px-Giorno_Giovanna_Infobox_Anime.png' alt='jojo character'/>
            <div className='characterName'>Giorno Giovanna</div>
        </div>
    )
}