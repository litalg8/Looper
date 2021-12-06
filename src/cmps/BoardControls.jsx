import React from 'react';

const BoardControls = ({ playAllSongs, stopAllSongs }) => {
    return (
        <div>
            <button onClick={playAllSongs}>Play All</button>
            <button onClick={stopAllSongs}>Stop</button>
        </div>
    )
}

export default BoardControls;