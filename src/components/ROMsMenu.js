import React from 'react';
import {Dialog} from '@blueprintjs/core';

class ROMsMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            roms: [
                {name: 'test_rom'},
                {name: 'test_rom_2'},
                {name: 'test_rom_3'},
                {name: 'test_rom_4'},
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
            <Dialog
                isOpen={isOpen}
            >
                <div className='roms-dialog nes-container with-title'>
                    <div className='roms-dialog__header title'>ROMs</div>
                    <button className='nes-btn'>Select your file</button>
                    <div>{roms.map(ROMContainer)}</div>
                </div>
            </Dialog>
        );
    }
}

function ROMContainer(props) {
    const {name} = props;
    return (
      <div className='rom-container nes-container'>
          <div className='rom-container__image' />
          <div className='rom-container__name'>{name}</div>
          <div className='rom-container__button'>
            <button>{'X'}</button>
          </div>
      </div>
    );
}

export default ROMsMenu;
