import logo from './logo.svg';
import './App.css';
import Lottie from 'react-lottie';
import animationData from './89754-file-loading.json';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({ isStopped: false, isPaused: false });

  const buttonStyle = {
    display: 'block',
    margin: '10px auto'
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Lottie options={defaultOptions}
          height={400}
          width={400}
          isStopped={state.isStopped}
          isPaused={state.isPaused} />
        <button style={buttonStyle} onClick={() => setState({ isStopped: true })}>stop</button>
        <button style={buttonStyle} onClick={() => setState({ isStopped: false })}>play</button>
        <button style={buttonStyle} onClick={() => setState({ isPaused: !state.isPaused })}>pause</button>
      </header>
    </div >
  );
}

export default App;
