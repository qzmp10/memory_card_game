import React from 'react'
import { useState, useEffect, useRef } from 'react'


export default function Card2(props) {
    const { shuffleDeck } = props;

    const cardClass = `card card${props.index}`

    return (
        <div className={cardClass} onClick={props.userClicked} data-id='unclicked'>
            <img className='img' 
            src='https://static.jojowiki.com/images/thumb/3/34/latest/20200604060940/Jonathan_Infobox_Anime.png/400px-Jonathan_Infobox_Anime.png' 
            alt='jojo character' />
            <div className='characterName'>Jonathan Joestar</div>
        </div>
    )
}