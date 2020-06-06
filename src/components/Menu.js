import React from 'react';

function Menu() {
  return (
    <div className='menu'>
        <div className='menu__top'>
            <button>ROMs</button>
            <button>Settings</button>
            <button>About</button>
        </div>
        <div className='menu__bottom'>
            <button>Pause</button>
            <button>Next Frame</button>
            <button>Save State</button>
            <button>Load State</button>
            <span>30 FPS</span>
        </div>
    </div>
  );
}

export default Menu;
