import _ from 'lodash';
import {Dialog} from '@blueprintjs/core';
import defaltControls from './../configs/defaultControls';
import React from 'react';

class ControlsMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            controls: _.cloneDeep(defaltControls),
            selectedGroup: 'Player 1',
        };

        this.onSelectedGroupOptionChange = this.onSelectedGroupOptionChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onFormReset = this.onFormReset.bind(this);
        this.onFormSave = this.onFormSave.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
    }

    openDialog() {
        this.setState({isOpen: true});
    }

    closeDialog() {
        this.setState({isOpen: false});
    }

    onSelectedGroupOptionChange(e) {
        const selectedGroup = e.target.value;
        this.setState({selectedGroup});
    }

    onKeyDown(e, inputProps) {
        e.preventDefault();
        const {group, label} = inputProps;
        const {controls} = this.state;
        const keyCode = e.which;
        const value = e.key === ' ' ? 'Space' : e.key;

        if (keyCode && value) {
            this.removeDuplicateControls(keyCode);
            const controlObj = controls[group][label];
            controlObj.value = value.charAt(0).toUpperCase() + value.slice(1);;
            controlObj.keyCode = keyCode;
            this.setState({controls: this.state.controls});
        }
    }

    removeDuplicateControls(keyCode) {
        const {controls} = this.state;
        for (const groupKey in controls) {
            const group = controls[groupKey];
            for (const label in group) {
                const controlObj = group[label];
                if (controlObj.keyCode === keyCode) {
                    controlObj.keyCode = null
                    controlObj.value = '';
                }
            }
        }
    }

    onFormReset() {
        this.setState({controls: _.cloneDeep(defaltControls)});
    }

    onFormSave() {
        this.closeDialog();
    }

    render() {
        const {isOpen, controls, selectedGroup} = this.state;
         
        return (
            <React.Fragment>
                <button className='nes-btn' onClick={this.openDialog}>Controls</button>
                <Dialog
                    canEscapeKeyClose={false}
                    isOpen={isOpen}
                    onClose={this.closeDialog}
                    transitionDuration={0}
                >
                    <div className='dialog nes-container with-title'>
                        <div className='title'>Controls</div>
                        <div className='form'>
                            <div className='form__input form__input--radio'>    
                                <label>
                                    <input
                                        checked={selectedGroup === 'Player 1'}
                                        class='nes-radio'
                                        onChange={this.onSelectedGroupOptionChange}
                                        type='radio'
                                        value='Player 1'
                                    />
                                    <span>Player 1</span>
                                </label>
                                <label>
                                    <input
                                        checked={selectedGroup === 'Player 2'}
                                        class='nes-radio'
                                        onChange={this.onSelectedGroupOptionChange}
                                        type='radio'
                                        value='Player 2'
                                    />
                                    <span>Player 2</span>
                                </label>
                                <label>
                                    <input
                                        checked={selectedGroup === 'Other'}
                                        class='nes-radio'
                                        onChange={this.onSelectedGroupOptionChange}
                                        type='radio'
                                        value='Other'
                                    />
                                    <span>Other</span>
                                </label>
                            </div>
                        </div>
                        <div className='controls-group'>
                            {Object.values(controls[selectedGroup]).map((props) => {
                                const {label, group} = props;
                                const id = `${group}_${label}`;
                                return <ControlInput
                                    {...props}
                                    id={id}
                                    key={id}
                                    onKeyDown={this.onKeyDown}
                                />
                            })}
                        </div>
                        <div className='actions-bar'>
                            <button
                                className='nes-btn'
                                onClick={this.onFormReset}
                            >
                                Reset
                            </button>
                            <button
                                className='nes-btn is-primary'
                                onClick={this.onFormSave}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </Dialog>
            </React.Fragment>
        );
    }
}

const ControlInput = (props) => {
    const {label, value, onKeyDown, id} = props;

    return (
        <div className='control-input'>
            <span className='control-input__label'>{label}</span>
            <input
                className='control-input__value nes-btn'
                id={id}
                onKeyDown={(e) => onKeyDown(e, props)}
                value={value}
                placeholder='None'
            />
        </div>
    );
};

export default ControlsMenu;
