import React from 'react'


export default function Card11(props) {
    const {shuffleDeck} = props;

    const cardClass = `card card${props.index}`
    
    return (
        <div className={cardClass} onClick={props.userClicked} data-id='unclicked' onMouseEnter={props.hover} onMouseLeave={props.out}>
            <img className='img'
                src='https://static.jojowiki.com/images/1/1f/latest/20220710183109/Pucci_New_Moon_Infobox_Manga.png'
                alt='jojo character' />
            <div className='characterName'>Enrico Pucci</div>
        </div>
    )
}