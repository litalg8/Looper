import React from 'react';
import Square from './Square';
import BoardControls from './BoardControls'
import useLoopSampler from '../hooks/useLoopSampler';

const SoundBoard = ({ urls }) => {
    const [songs, toggle] = useLoopSampler(urls)

    return (
        <ul className="square-container" >
            <BoardControls />
            {songs.map((song, i) => (
                <Square key={i} song={song} toggle={toggle(i)} />
            ))}
        </ul>
    )
}


export default SoundBoard;