import {Dialog} from '@blueprintjs/core';
import React from 'react';

class RomsMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            roms: [
                {name: 'Alter Ego'},
                {name: 'Cheril the Goddess'},
                {name: 'Dushlan'},
                {name: 'Mad Wizard'},
            ]
        };
    }

    openDialog() {
        this.setState({isOpen: true});
    }

    closeDialog() {
        this.setState({isOpen: false});
    }

    render() {
        const {isOpen, roms} = this.state;

        return (
            <Dialog isOpen={isOpen}>
                <div className='dialog nes-container with-title'>
                    <div className='title'>ROMs</div>
                    <button className='nes-btn'>Select your file</button>
                    <div className='rom-list-container'>{roms.map(RomContainer)}</div>
                </div>
            </Dialog>
        );
    }
}

function RomContainer(props) {
    const {name} = props;

    return (
      <div className='rom-container nes-container' key={name}>
            <div className='rom-container__name'>{name}</div>
            <button className='rom-container__button nes-btn is-error'>X</button>
      </div>
    );
}

export default RomsMenu;
