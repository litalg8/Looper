import React from 'react';

function LoopControls({ loopSample, isPlaying, onPlayStopLoop }) {

    return (
        <>
            {isPlaying   ? 

                (
                    <div className="sqr" key={loopSample.id} onClick={() => onPlayStopLoop(false)}>
                    {loopSample.name}
                </div>) : 
                (
                    <div className="sqr" key={loopSample.id} onClick={() => onPlayStopLoop(true)}>
                        {loopSample.name}
                    </div>              
                )}
        </>
    )
}

export default LoopControls;