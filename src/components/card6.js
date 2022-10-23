import React from 'react'


export default function Card6(props) {
    const { shuffleDeck } = props;

    const cardClass = `card card${props.index}`

    return (
        <div className={cardClass} onClick={props.userClicked} data-id='unclicked' onMouseEnter={props.hover} onMouseLeave={props.out}>
            <img className='img'
                src='https://static.jojowiki.com/images/thumb/9/9b/latest/20211012034402/Koichi_Hirose_Infobox_Anime.png/400px-Koichi_Hirose_Infobox_Anime.png'
                alt='jojo character' />
            <div className='characterName'>Koichi Hirose</div>
        </div>
    )
}