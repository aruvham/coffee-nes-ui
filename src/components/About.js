import _ from 'lodash';
import {Dialog} from '@blueprintjs/core';
import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
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
        const {isOpen} = this.state;

        return (
            <React.Fragment>
                <button className='nes-btn' onClick={this.openDialog}>About</button>
                <Dialog
                    canEscapeKeyClose={false}
                    isOpen={isOpen}
                    onClose={this.closeDialog}
                    transitionDuration={0}
                >
                    <div className='dialog nes-container with-title'>
                        <div className='title'>About</div>
                    </div>
                </Dialog>
            </React.Fragment>
        );
    }
}

export default About;
