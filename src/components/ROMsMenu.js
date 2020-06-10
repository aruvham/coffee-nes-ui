import {Dialog} from '@blueprintjs/core';
import React from 'react';

class RomsMenu extends React.Component {
    constructor(props) {
        super(props);
        this.services = props.services;
        this.fileInput = null;

        this.state = {
            isOpen: false,
            roms: []
        };

        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.onFileSelectButtonClick = this.onFileSelectButtonClick.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onRomClick = this.onRomClick.bind(this);
        this.onRomDelete = this.onRomDelete.bind(this);
    }

    componentDidMount() {
        this.setState({roms: this.services.localStorageService.get()});
    }

    openDialog() {
        this.setState({roms: this.services.localStorageService.get()});
        this.setState({isOpen: true});
    }

    closeDialog() {
        this.setState({isOpen: false});
    }

    onFileSelectButtonClick() {
        if (this.fileInput) this.fileInput.click();
    }

    onFileChange(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file)

        reader.onload = readerEvent => {
            const content = readerEvent.target.result;
            const romData = new Uint8Array(content);
            this.services.localStorageService.addRomData(file.name, romData);
            this.setState({roms: this.services.localStorageService.get()});
        }
    }

    onRomClick(idx) {
        const romData = this.services.localStorageService.getRomDataAtIdx(idx);
        console.log(romData);
    }

    onRomDelete(e, idx) {
        e.stopPropagation();
        this.services.localStorageService.deleteRomDataAtIdx(idx);
        this.setState({roms: this.services.localStorageService.get()});
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
                        <button className='nes-btn' onClick={this.onFileSelectButtonClick}>Select File</button>
                        <input id='rom-file-input' type='file' ref={el => {this.fileInput = el}} onChange={this.onFileChange}/>
                        <div className='rom-list-container'>{roms.map((props, idx) => {
                            return <RomContainer
                                {...props}
                                idx={idx}
                                key={idx}
                                onRomClick={this.onRomClick}
                                onRomDelete={this.onRomDelete}
                            />
                        })}</div>
                    </div>
                </Dialog>
            </React.Fragment>
        );
    }
}

function RomContainer(props) {
    const {name, userCreated, onRomClick, onRomDelete, idx} = props;

    return (
      <div className='rom-container nes-container' onClick={() => onRomClick(idx)}>
            <div className='rom-container__name'>{name}</div>
            {userCreated && <button className='rom-container__button nes-btn is-error' onClick={(e) => onRomDelete(e, idx)}>X</button>}
      </div>
    );
}

export default RomsMenu;
