import React from 'react';

const Square = ({ song, toggle }) => {
    //trying to add styling with forEach maybe

    return (
        <li className="square">
            <div className="sqr" onClick={toggle}>
                <span className="sqr-icon" >{song.isPlaying ? song.icon : song.baseIcon}</span>
            </div>
        </li>
    )
}

export default Square;