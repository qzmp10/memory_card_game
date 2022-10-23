import React from 'react'


export default function Card3(props) {
    const { shuffleDeck } = props;

    const cardClass = `card card${props.index}`

    return (
        <div className={cardClass} onClick={props.userClicked} data-id='unclicked'>
            <img className='img'
                src='https://static.jojowiki.com/images/thumb/a/a1/latest/20211011184730/Joseph_SC_Infobox_Anime.png/400px-Joseph_SC_Infobox_Anime.png'
                alt='jojo character' />
            <div className='characterName'>Joseph Joestar</div>
        </div>
    )
}