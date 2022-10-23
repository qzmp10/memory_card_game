import React from 'react'


export default function Card7(props) {
    const {shuffleDeck} = props;

    const cardClass = `card card${props.index}`
    
    return (
        <div className={cardClass} onClick={props.userClicked} data-id='unclicked' onMouseEnter={props.hover} onMouseLeave={props.out}>
            <img className='img'
                src='https://static.jojowiki.com/images/0/0a/latest/20210424101455/DIO_Normal_SC_Infobox_Anime.png'
                alt='jojo character' />
            <div className='characterName'>Dio</div>
        </div>
    )
}