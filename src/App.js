import { useState } from 'react';
import './App.css';
import CardContainer from './components/cardContainer';

function App() {
  const [scoreState, setScoreState] = useState(0);
  const [bestScoreState, setBestScoreState] = useState(0);

  const scoreCallback = (score) => {
    setScoreState(score);
  }

  const bestScoreCallback = (bestScore) => {
    setBestScoreState(bestScore);
  }

  return (
    <>
      <h1 className='header'>JOJO'S BIZARRE MEMORY CARD GAME</h1>
      <h4 className='advice'>Get points by clicking on an image but don't click on any more than once!</h4>
      <h2 className='score'>Score: {scoreState} | Best Score: {bestScoreState}</h2>
      <CardContainer callbackFn={scoreCallback} bestCallbackFn={bestScoreCallback}/>
    </>
  );
}

export default App;
