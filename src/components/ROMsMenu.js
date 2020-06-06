import React from 'react';
import {Dialog} from '@blueprintjs/core';

class ROMsMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
    }

    render() {
        const {isOpen} = this.state;

        return (
            <Dialog
                isOpen={isOpen}
            >
                <div className='roms-dialog'>
                    <button>Select your file</button>
                </div>
            </Dialog>
        );
    }
}

function ROMContainer(props) {
    const {name} = props;
    return (
      <div className='rom-container'>
          <div className='rom-container__image' />
          <div className='rom-container__name'>{name}</div>
          <button className='rom-container__button'>{'X'}</button>
      </div>
    );
}

export default ROMsMenu;
