import React from 'react';
import Square from './Square';
import BoardControls from './BoardControls'
import useLoopSampler from '../hooks/useLoopSampler';

const SoundBoard = ({ urls }) => {
    const [songs, toggle, playAllSongs, stopAllSongs] = useLoopSampler(urls)

    return (
        <ul className="square-container" >
            <BoardControls playAllSongs={playAllSongs} stopAllSongs={stopAllSongs} />
            {songs.map((song, i) => {
                return (
                    <Square key={i} song={song} toggle={toggle(i)} />
                )
            })}
        </ul>
    )
}

export default SoundBoard;