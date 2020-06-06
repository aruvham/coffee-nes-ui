import React from 'react';
import Canvas from './Canvas';
import Menu from './Menu';
import ROMsMenu from './ROMsMenu';

import "nes.css/css/nes.min.css";
import "@blueprintjs/core/lib/css/blueprint.css";

function App() {
  return (
    <div className='app'>
      <header className='header'>
        Coffee NES
      </header>
      <Canvas />
      <Menu />
      <ROMsMenu />
    </div>
  );
}

export default App;
