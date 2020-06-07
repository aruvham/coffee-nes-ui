import {Dialog} from '@blueprintjs/core';
import React from 'react';

class RomsMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            roms: [
                {name: 'Super Mario Bros', isUserRom: true},
                {name: 'Mad Wizard', isUserRom: true},
                {name: 'Alter Ego'},
                {name: 'Cheril the Goddess'},
            ]
        };

        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
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
            <React.Fragment>
                <button className='nes-btn' onClick={this.openDialog}>ROMs</button>
                <Dialog
                    canEscapeKeyClose={false}
                    isOpen={isOpen}
                    onClose={this.closeDialog}
                    transitionDuration={0}
                >
                    <div className='dialog nes-container with-title'>
                        <div className='title'>ROMs</div>
                        <button className='nes-btn'>Select File</button>
                        <div className='rom-list-container'>{roms.map(RomContainer)}</div>
                    </div>
                </Dialog>
            </React.Fragment>
        );
    }
}

function RomContainer(props) {
    const {name, isUserRom} = props;

    return (
      <div className='rom-container nes-container' key={name}>
            <div className='rom-container__name'>{name}</div>
            {isUserRom && <button className='rom-container__button nes-btn is-error'>X</button>}
      </div>
    );
}

export default RomsMenu;
