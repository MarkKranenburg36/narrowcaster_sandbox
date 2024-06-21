import './App.css'
import { Weather } from './Components/Weather';
import { Greeting } from './Components/Greeting';
import Widget from './Components/Widget';

function App() {
  
  return (
    <>
      <Greeting text={'Goedemorgen!'} />
      <Weather />
      <Widget title={'Social media'}>
        <p>child 1</p>
        <p>child 2</p>
      </Widget>
    </>
  );
}

export default App
