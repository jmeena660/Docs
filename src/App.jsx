import React from 'react';
import Background from './components/Background';
import Foreground from './components/Foreground';
import './index.css'; 

function App() {
  return (
    <div className='relative h-screen w-full bg-zinc-800'>
      <Background />
      <Foreground />
    </div>
  );
}

export default App;

