import './App.css'
import { Weather } from './Components/Weather';
import { Greeting } from './Components/Greeting';

function App() {
  
  return (
    <>
      <Greeting text={'Goedemorgen!'}/>
      <Weather />
    </>
  );
}

export default App
