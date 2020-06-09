import _ from 'lodash';
import {Dialog} from '@blueprintjs/core';
import React from 'react';

class SettingsMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            formState: {
                fps: 30,
                displayFps: true,
                visualizeMemory: true
            }
        };

        this.onFormSave = this.onFormSave.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.onFpsOptionChange = this.onFpsOptionChange.bind(this);
        this.onVisualizeMemoryChange = this.onVisualizeMemoryChange.bind(this);
        this.onDisplayFpsChange = this.onDisplayFpsChange.bind(this);
    }

    openDialog() {
        this.setState({isOpen: true});
    }

    closeDialog() {
        this.setState({isOpen: false});
    }

    onFpsOptionChange(e) {
        const {formState} = this.state;
        const fps = parseInt(e.target.value);
        this.setState({formState: {...formState, fps}});
    }

    onVisualizeMemoryChange() {
        const {formState} = this.state;
        const visualizeMemory = !formState.visualizeMemory;
        this.setState({formState: {...formState, visualizeMemory}});
    }

    onDisplayFpsChange() {
        const {formState} = this.state;
        const displayFps = !formState.displayFps;
        this.setState({formState: {...formState, displayFps}});
    }

    onFormSave() {
        this.closeDialog();
    }

    render() {
        const {isOpen, formState: {fps, displayFps, visualizeMemory}} = this.state;

        return (
            <React.Fragment>
                <button className='nes-btn' onClick={this.openDialog}>Settings</button>
                <Dialog
                    canEscapeKeyClose={false}
                    isOpen={isOpen}
                    onClose={this.closeDialog}
                    transitionDuration={0}
                >
                    <div className='dialog nes-container with-title'>
                        <div className='title'>Settings</div>
                        <div className='form'>
                            <div className='form__input form__input--radio'>    
                                <label>
                                    <input
                                        checked={fps === 30}
                                        class='nes-radio'
                                        type='radio'
                                        value={30}
                                        onChange={this.onFpsOptionChange}
                                    />
                                    <span>30 FPS</span>
                                </label>
                                <label>
                                    <input
                                        checked={fps === 60}
                                        class='nes-radio'
                                        type='radio'
                                        value={60}
                                        onChange={this.onFpsOptionChange}
                                    />
                                    <span>60 FPS</span>
                                </label>
                            </div>
                            <div className='form__input'>    
                                <label>
                                    <input
                                        checked={displayFps}
                                        class='nes-checkbox'
                                        onChange={this.onDisplayFpsChange}
                                        type='checkbox'
                                    />
                                    <span>Display FPS</span>
                                </label>
                            </div>
                            <div className='form__input'>    
                                <label>
                                    <input
                                        checked={visualizeMemory}
                                        class='nes-checkbox'
                                        onChange={this.onVisualizeMemoryChange}
                                        type='checkbox'
                                    />
                                    <span>Visualize memory</span>
                                </label>
                            </div>
                            <div className='actions-bar'>    
                                <button className='nes-btn is-primary' onClick={this.onFormSave}>Save</button>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </React.Fragment>
        );
    }
}

export default SettingsMenu;
