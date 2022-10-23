import React from 'react'


export default function Card5(props) {
    const {shuffleDeck} = props;

    const cardClass = `card card${props.index}`
    
    return (
        <div className={cardClass} onClick={props.userClicked} data-id='unclicked' onMouseEnter={props.hover} onMouseLeave={props.out}>
        <img className='img'
            src='https://static.jojowiki.com/images/thumb/4/49/latest/20211117015857/Josuke_DU_Infobox_Anime.png/400px-Josuke_DU_Infobox_Anime.png'
            alt='jojo character' />
        <div className='characterName'>Josuke Higashikata</div>
    </div>
    )
}