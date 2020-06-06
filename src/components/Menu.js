import React from 'react';

function Menu() {
  return (
    <div className='menu'>
        <div className='menu__top'>
            <button className='nes-btn'>ROMs</button>
            <button className='nes-btn'>Settings</button>
            <button className='nes-btn'>About</button>
        </div>
        <div className='menu__bottom'>
            <button className='nes-btn'>Pause</button>
            <button className='nes-btn'>Next Frame</button>
            <button className='nes-btn is-disabled'>Save State</button>
            <button className='nes-btn is-disabled'>Load State</button>
            <FPSDisplay />
        </div>
    </div>
  );
}

function FPSDisplay(props) {
    const {fps} = props;
    const fpsDisplay = '30 FPS';
    return (
    <span className='fps-display'>{fpsDisplay}</span>
    );
  }

export default Menu;
