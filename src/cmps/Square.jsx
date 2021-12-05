import React from 'react';

const Square = ({ song, toggle }) => {
    return (
        <li className="square">
            <div className ="sqr" onClick={toggle}>{song.isPlaying ? 'Pause' : 'Play'}</div>
        </li>
    )
}

export default Square;