import React from 'react';
import Square from './Square';
import BoardControls from './BoardControls'
import useLoopSampler from '../hooks/useLoopSampler';

const SoundBoard = ({ urls }) => {
    const [songs, toggle, playAllSongs, stopAllSongs] = useLoopSampler(urls)

    return (
        <section className="sound-board">
        <BoardControls playAllSongs={playAllSongs} stopAllSongs={stopAllSongs} />
        <div className="soundboard-container container" >
            {songs.map((song, i) => {
                return (
                    <Square key={i} song={song} toggle={toggle(i)} />
                )
            })}
        </div>
        </section>
    )
}

export default SoundBoard;