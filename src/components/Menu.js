import About from './About';
import ControlsMenu from './ControlsMenu';
import React from 'react';
import RomsMenu from './RomsMenu';
import SettingsMenu from './SettingsMenu';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='menu'>
                <div className='menu__top'>
                    <RomsMenu />
                    <SettingsMenu />
                    <ControlsMenu />
                    <About />
                </div>
                <div className='menu__bottom'>
                    <button className='nes-btn'>Pause</button>
                    <button className='nes-btn'>Next Frame</button>
                    <button className='nes-btn is-disabled'>Save State</button>
                    <button className='nes-btn is-disabled'>Load State</button>
                </div>
            </div>
        );
    }
}

export default Menu;
