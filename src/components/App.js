import Canvas from './Canvas';
import Menu from './Menu';
import React from 'react';
import FpsDisplay from './FpsDisplay'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.services = props.services;
    }

    render() {
        return (
            <div className='app'>
                <header className='header'>
                    <span>Coffee NES</span>
                </header>
                <Canvas services={this.services} />
                <Menu services={this.services} />
                <FpsDisplay />
                <footer className='footer'>
                    <a href='https://github.com/aruvham/coffee-nes-ui' target='_blank'>
                        <i className="nes-icon github is-small"></i>
                        <span>Source on Github</span>
                    </a>
                </footer>
            </div>
        );
    }
}

export default App;
