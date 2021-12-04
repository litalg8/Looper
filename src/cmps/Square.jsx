import React, { useState, useEffect, useRef } from 'react';
import LoopControls from './LoopControls';

function Square({ loopSample }) {
    //State
    const [isPlaying, setIsPlaying] = useState(false);
    const [nextSong, setNextSong] = useState(false)
    const [loopIndex, setLoopIndex] = useState(0);
    // const [selectedLoops, setSelectedLoops] = useState([])
    //Refs
    const audioRef = useRef(new Audio(loopSample.src))
    const { duration } = audioRef.current;

    useEffect(() => {
        // console.log('duration', duration);
        setLoopIndex(loopSample.id)
        console.log(loopIndex)
        console.log('isPlaying', isPlaying);
        console.log('nextSong',nextSong);
        if (isPlaying && nextSong) {
            console.log('inside isPlaying and nextSong');
            console.log(isPlaying);
            var timer = setTimeout(() => {
                console.log('Timeout called!');
                audioRef.current.play();
            }, 4000);
        }
        else if (isPlaying ) {
            console.log(isPlaying);
            console.log(nextSong);
            audioRef.current.play();
            // setSelectedLoops(selectedLoops.push(loopIndex))
            // audioRef.current.loop = true;
        } else {
            audioRef.current.pause();
            audioRef.current.load();

        }
    }, [isPlaying]);

    useEffect(() => {
        return () => {
            audioRef.current.pause();
        }
    }, [])

    return (
        <li className="square-container">
            <LoopControls
                loopSample={loopSample}
                onPlayStopLoop={setIsPlaying}
                isPlaying={isPlaying}
            />
        </li>
    )
}

export default Square;