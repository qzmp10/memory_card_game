import React from 'react'


export default function Card10(props) {
    const {shuffleDeck} = props;

    const cardClass = `card card${props.index}`
    
    return (
        <div className={cardClass} onClick={props.userClicked} data-id='unclicked' onMouseEnter={props.hover} onMouseLeave={props.out}>
            <img className='img'
                src='https://static.jojowiki.com/images/thumb/c/ce/latest/20210107171552/Yoshikage_Kira_Original_Infobox_Manga.png/400px-Yoshikage_Kira_Original_Infobox_Manga.png'
                alt='jojo character' />
            <div className='characterName'>Yoshikage Kira</div>
        </div>
    )
}