import React from 'react'


export default function Card9(props) {
    const {shuffleDeck} = props;

    const cardClass = `card card${props.index}`
    
    return (
        <div className={cardClass} onClick={props.userClicked} data-id='unclicked'>
            <img className='img'
                src='https://static.jojowiki.com/images/6/69/latest/20201130220440/Jotaro_SC_Infobox_Manga.png'
                alt='jojo character' />
            <div className='characterName'>Jotaro Cujoh</div>
        </div>
    )
}