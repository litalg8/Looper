import React from 'react';

const BoardControls = ({ playAllSongs, stopAllSongs }) => {
    return (
        <header className="app-header flex justify-center">
            <div className="header-container row">
                <nav className="main-nav container flex justify-space align-center">
                    <div className="logo-container">grooveo</div>
                    <ul className="controls-nav">
                        <li className="item nav-item"> <button onClick={playAllSongs}>Play All</button>
                        </li>
                        <li className="item nav-item"><button onClick={stopAllSongs}>Stop</button></li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default BoardControls;