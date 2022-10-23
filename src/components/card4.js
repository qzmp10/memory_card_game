import React from 'react'


export default function Card4(props) {
    const { shuffleDeck } = props;

    const cardClass = `card card${props.index}`

    return (
        <div className={cardClass} onClick={props.userClicked} data-id='unclicked'>
            <img className='img'
                src='https://static.jojowiki.com/images/thumb/b/ba/latest/20211013051059/Polnareff_SC_Infobox_Anime.png/400px-Polnareff_SC_Infobox_Anime.png'
                alt='jojo character' />
            <div className='characterName'>Polnareff</div>
        </div>
    )
}