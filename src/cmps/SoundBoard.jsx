import React  from 'react';
import Square from './Square';

function SoundBoard({ loopSamples }) {

    return (
        <ul className="sound-board flex justify-center container">
            {loopSamples.map(loopSample =>
                <Square       
                loopSample={loopSample}  
                key={loopSample.id}/>
            )}
        </ul>
    )
}

export default SoundBoard;