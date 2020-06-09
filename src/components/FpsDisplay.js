import React from 'react';

function FpsDisplay(props) {
    const {fps} = props;
    const fpsDisplay = fps ? `${30} FPS` : 'Paused';
    return (
        <div className='fps-container'>
            <span className='fps-container__display'>{fpsDisplay}</span>
        </div>    
    );
}

export default FpsDisplay;
