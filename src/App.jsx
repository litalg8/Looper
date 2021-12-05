import React from 'react'; 
import './assets/styles/global.scss';
import SoundBoard from './cmps/SoundBoard';
import AppHeader from './cmps/AppHeader'

function App(){
    return(
        <section className="app container">
            <AppHeader/>
            <SoundBoard />
        </section>
    )
}

export default App; 