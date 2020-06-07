import _ from 'lodash';
import {Dialog} from '@blueprintjs/core';
import React from 'react';

class SettingsMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            formState: { fps: 30, visualizeMemory: true }
        };

        this.onFormSave = this.onFormSave.bind(this);
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

    onFormSave() {

    }

    render() {
        const {isOpen, formState: {fps, visualizeMemory}} = this.state;

        return (
            <Dialog isOpen={isOpen}>
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
                                    onChange={(e) => this.onFpsOptionChange(e)}
                                />
                                <span>30 FPS</span>
                            </label>
                            <label>
                                <input
                                    checked={fps === 60}
                                    class='nes-radio'
                                    type='radio'
                                    value={60}
                                    onChange={(e) => this.onFpsOptionChange(e)}
                                />
                                <span>60 FPS</span>
                            </label>
                        </div>
                        <div className='form__input'>    
                            <label>
                                <input
                                    checked={visualizeMemory}
                                    class='nes-checkbox'
                                    onChange={(e) => this.onVisualizeMemoryChange(e)}
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
        );
    }
}

export default SettingsMenu;
