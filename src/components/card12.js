import React from 'react'


export default function Card12(props) {
    const {shuffleDeck} = props;

    const cardClass = `card card${props.index}`
    
    return (
        <div className={cardClass} onClick={props.userClicked} data-id='unclicked'>
            <img className='img'
                src='https://static.jojowiki.com/images/thumb/2/21/latest/20201208003715/Diavolo_Revealed_Infobox_Anime.png/400px-Diavolo_Revealed_Infobox_Anime.png'
                alt='jojo character' />
            <div className='characterName'>Diavolo</div>
        </div>
    )
}