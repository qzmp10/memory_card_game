import './App.css';
import CardContainer from './components/cardContainer';

function App() {
  return (
    <>
      <h1 className='header'>JOJO'S BIZARRE MEMORY CARD GAME</h1>
      <h4 className='advice'>Get points by clicking on an image but don't click on any more than once!</h4>
      <h2 className='score'>Score: </h2>
      <CardContainer/>
    </>
  );
}

export default App;
