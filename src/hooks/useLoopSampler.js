import { useState, useEffect } from 'react'

const useLoopSampler = () => {
    const [selectedSongs, setSelectedSongs] = useState([])
    const urls = [
        'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/1.mp3',
        'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/2.mp3',
        'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/3.mp3',
        'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/4.mp3',
        'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/5.mp3',
        'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/6.mp3',
        'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/7.mp3',
        'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/8.mp3',
        'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/9.mp3',
    ]

    const [sources] = useState(
        urls.map(url => {
            return {
                url,
                audio: new Audio(url),
            }
        }),
    )

    const [songs, setSongs] = useState(
        urls.map(url => {
            return {
                url,
                isPlaying: false,
            }
        }),
    )

    const toggle = targetIndex => () => {
        // creating a shallow copy of songs array
        const newSongs = [...songs]
        console.log(newSongs);
        // finding the current index for the playing song 
        const currentIndex = songs.findIndex(song => song.isPlaying === true)
        console.log('current index', currentIndex);
        console.log('target index', targetIndex);
        if (currentIndex !== -1 && currentIndex !== targetIndex) {
            // clicked on a square while another square is playing
            newSongs[currentIndex].isPlaying = true;
            setTimeout(() => {
                newSongs[targetIndex].isPlaying = true;
            }, 4000)
        } else if (currentIndex !== -1) {
            // clicked on a playing square 
            newSongs[targetIndex].isPlaying = false;

        } else {
            // clicked on a square while no other song was playing 
            newSongs[targetIndex].isPlaying = true;
        }
        addToSongArr(targetIndex)
        setSongs(newSongs)
    }

    const addToSongArr = (index) => {
        const newSongs = [...songs]; 
        let currSong = newSongs[index]; 
        if (selectedSongs.includes(currSong)) return; 
        selectedSongs.splice(index, 0, currSong); 
        setSelectedSongs(selectedSongs);
        console.log(selectedSongs);
    }

    useEffect(() => {
        sources.forEach((source, i) => {
            // source.audio.loop = true;
            // if state of current song isPlaying then play the song. otherwise reload it
            songs[i].isPlaying ? source.audio.play() : source.audio.load();
        })
    }, [sources, songs])

    useEffect(() => {
        // for each song source add an event listener for when the song is ended
        // create a shallow copy of song and change its isPlaying state to false. 
        sources.forEach((source, i) => {
            source.audio.addEventListener('ended', () => {
                const newSongs = [...songs];
                newSongs[i].isPlaying = false;
                setSongs(newSongs);
            })
        })
        return () => {
            // for each song source remove the 'ended' event listener 
            // create a shallow copy of song and change its isPlaying state to false. 
            sources.forEach((source, i) => {
                source.audio.removeEventListener('ended', () => {
                    const newSongs = [...songs];
                    newSongs[i].isPlaying = false;
                    setSongs(newSongs);
                })
            })
        }
    }, [])

    return [songs, toggle];
}

export default useLoopSampler;