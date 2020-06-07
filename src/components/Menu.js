import About from './About';
import ControlsMenu from './ControlsMenu';
import React from 'react';
import RomsMenu from './RomsMenu';
import SettingsMenu from './SettingsMenu';

function Menu() {
  return (
    <div className='menu'>
        <div className='menu__top'>
            <button className='nes-btn'>ROMs</button>
            <button className='nes-btn'>Settings</button>
            <button className='nes-btn'>Controls</button>
            <button className='nes-btn is-disabled'>About</button>
        </div>
        <div className='menu__bottom'>
            <button className='nes-btn'>Pause</button>
            <button className='nes-btn'>Next Frame</button>
            <button className='nes-btn is-disabled'>Save State</button>
            <button className='nes-btn is-disabled'>Load State</button>
            <FPSDisplay fps={30}/>
        </div>
        <RomsMenu />
        <SettingsMenu />
        <ControlsMenu />
        <About />
    </div>
  );
}

function FPSDisplay(props) {
    const {fps} = props;
    const fpsDisplay = fps ? `${30} FPS` : 'Paused';
    return (
        <span className='fps-display'>{fpsDisplay}</span>
    );
}

export default Menu;
