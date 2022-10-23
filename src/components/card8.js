import React from 'react'


export default function Card8(props) {
    const {shuffleDeck} = props;

    const cardClass = `card card${props.index}`
    
    return (
        <div className={cardClass} onClick={props.userClicked} data-id='unclicked' onMouseEnter={props.hover} onMouseLeave={props.out}>
            <img className='img'
                src='https://static.jojowiki.com/images/thumb/2/20/latest/20200923041552/Jolyne_Infobox_Manga.png/400px-Jolyne_Infobox_Manga.png'
                alt='jojo character' />
            <div className='characterName'>Joline Cujoh</div>
        </div>
    )
}