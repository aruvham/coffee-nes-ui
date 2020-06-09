import Canvas from './Canvas';
import Menu from './Menu';
import React from 'react';
import FpsDisplay from './FpsDisplay'

function App() {
    return (
        <div className='app'>
            <header className='header'>
                <span>Coffee NES</span>
            </header>
            <Canvas />
            <Menu />
            <FpsDisplay />
            <footer className='footer'>
                <a src=''>
                    <i class="nes-icon github is-small"></i>
                    <span>Source on Github</span>
                </a>
            </footer>
        </div>
    );
}

export default App;
