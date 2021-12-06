import { useState, useEffect } from 'react'

const useLoopSampler = () => {
    // loop sample urls 
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

    const [songs, setSongs] = useState([
        {
            id: 1,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/1.mp3',
            baseIcon:'S',
            icon:'A',
            isPlaying: false,
        },
        {
            id: 2,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/2.mp3',
            baseIcon:'Q',
            icon:'B',
            isPlaying: false,

        },
        {
            id: 3,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/3.mp3',
            baseIcon:'P',
            icon:'C',
            isPlaying: false,

        },
        {
            id: 4,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/4.mp3',
            baseIcon:'O',
            icon:'D',
            isPlaying: false,

        },
        {
            id: 5,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/5.mp3',
            baseIcon:'N',
            icon:'E',
            isPlaying: false,

        },
        {
            id: 6,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/6.mp3',
            baseIcon:'M',
            icon:'F',
            isPlaying: false,

        }, 
        {
            id: 7,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/7.mp3',
            baseIcon:'T',
            icon:'G',
            isPlaying: false,

        }, 
        {
            id: 8,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/8.mp3',
            baseIcon:'K',
            icon:'H',
            isPlaying: false,

        }, 
        {
            id: 9,
            url: 'https://res.cloudinary.com/dk67dcp9c/video/upload/v1638379805/audio/9.mp3',
            baseIcon:'J',
            icon:'I',
            isPlaying: false,

        }, 

    ]);

    const [selectedSongs, setSelectedSongs] = useState([]);

    const toggle = targetIndex => () => {
        // creating a shallow copy of songs array
        const newSongs = [...songs]
        // finding the current index for the playing song 
        const currentIndex = songs.findIndex(song => song.isPlaying === true)
        // clicked on a square while another square is playing
        if (currentIndex !== -1 && currentIndex !== targetIndex) {
            // will play the current song 
            newSongs[currentIndex].isPlaying = true;
            // will play the next song after current song finishes
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
        // destructure the songs array and creating a shallow copy of it
        const newSongs = [...sources];
        // finding the current song selected index
        let currSong = newSongs[index];
        // preventing from the same song to be added twice
        if (selectedSongs.includes(currSong)) return;
        // adding the selected song into a selected song array 
        selectedSongs.splice(index, 0, currSong);
        setSelectedSongs(selectedSongs);
        console.log(selectedSongs);
    }

    // TODO: fix PlayAllSongs so they play one after the other

    const playAllSongs = () => {
        selectedSongs.forEach((selectedSong, i) => {
            songs[i].isPlaying ? selectedSong.audio.pause() : selectedSong.audio.play();
        })
    }
    const stopAllSongs = () => {
        selectedSongs.forEach((selectedSong, i) => {
            songs[i].isPlaying ? selectedSong.audio.pause() : selectedSong.audio.load();
        })
    }

    useEffect(() => {
        sources.forEach((source, i) => {
            // source.audio.loop = true; 
            // if state of current song isPlaying then play the song. otherwise reload it
            songs[i].isPlaying ? source.audio.play() : source.audio.load();
        })
    }, [sources, songs])

    useEffect(() => {
        // add an event listener to each song source that changes state when song is ended. 
        sources.forEach((source, i) => {
            source.audio.addEventListener('ended', () => {
                const newSongs = [...songs];
                newSongs[i].isPlaying = false;
                setSongs(newSongs);
            })
        })
        return () => {
            // remove the event listener from each song source  
            sources.forEach((source, i) => {
                source.audio.removeEventListener('ended', () => {
                    const newSongs = [...songs];
                    newSongs[i].isPlaying = false;
                    setSongs(newSongs);
                })
            })
        }
    }, [])

    return [songs, toggle, playAllSongs, stopAllSongs];
}

export default useLoopSampler;