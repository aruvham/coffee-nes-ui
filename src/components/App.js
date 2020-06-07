import Canvas from './Canvas';
import Menu from './Menu';
import React from 'react';

function App() {
  return (
    <div className='app'>
      <header className='header'>
        Coffee NES
      </header>
      <Canvas />
      <Menu />
    </div>
  );
}

export default App;
