import React from 'react';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.services = props.services;
        this.canvas = null;    
    }

    componentDidMount() {
        this.services.emulationService.installCanvas(this.canvas);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className='canvas'>
                <canvas
                    width={this.services.emulationService.WIDTH}
                    height={this.services.emulationService.HEIGHT}
                    ref={(el) => { this.canvas = el }}
                />
            </div>
        );
    }
}

export default Canvas;
