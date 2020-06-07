import _ from 'lodash';
import {Dialog} from '@blueprintjs/core';
import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
        };
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
            <Dialog isOpen={isOpen}>
                <div className='dialog nes-container with-title'>
                    <div className='title'>About</div>
                </div>
            </Dialog>
        );
    }
}

export default About;
