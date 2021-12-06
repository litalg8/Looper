import React, { createContext, useState } from 'react';

export const LoopContext = createContext();

const LoopContextProvider = (props) => {
    const [songs, setSongs] = useState([
        {
            id: 1,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/1.mp3',
            isPlaying: false,
        },
        {
            id: 2,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/2.mp3',
            isPlaying: false,

        },
        {
            id: 3,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/3.mp3',
            isPlaying: false,

        },
        {
            id: 4,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/4.mp3',
            isPlaying: false,

        },
        {
            id: 5,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/5.mp3',
            isPlaying: false,

        },
        {
            id: 6,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/6.mp3',
            isPlaying: false,

        }, 
        {
            id: 7,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/7.mp3',
            isPlaying: false,

        }, 
        {
            id: 8,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/8.mp3',
            isPlaying: false,

        }, 
        {
            id: 9,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/9.mp3',
            isPlaying: false,

        }, 

    ]);

    const [sources] = useState([
        {
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/1.mp3',
            audio: new Audio(sources.url),

        },
        {
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/2.mp3',
            audio: new Audio(sources.url),

        },
        {
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/3.mp3',
            audio: new Audio(sources.url),

        },
        {
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/4.mp3',
            audio: new Audio(sources.url),

        },
        {
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/5.mp3',
            audio: new Audio(sources.url),

        },
        {

            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/6.mp3',
            audio: new Audio(sources.url),

        },
        {
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/7.mp3',
            audio: new Audio(sources.url),

        },
        {
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/8.mp3',
            audio: new Audio(sources.url),

        },
        {
            url:'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/9.mp3',
            audio: new Audio(sources.url),

        }
    ]);

    return (
        <LoopContext.Provider value={{ songs, sources, setSongs }}>
            {props.children}
        </LoopContext.Provider>
    )
}

export default LoopContextProvider;


