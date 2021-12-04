import React from 'react'; 
import './assets/styles/global.scss';
import {loopSamples} from './loopSamples'
import SoundBoard from './cmps/SoundBoard';


function App(){
    return(
        <section className="app">
            <SoundBoard loopSamples={loopSamples}/>
        </section>
    )
}

export default App; 