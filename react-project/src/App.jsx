import './App.css'
import { Weather } from './Components/Weather';
import { Greeting } from './Components/Greeting';
import Widget from './Components/Widget';
import { Logo } from './Components/Logo';

function App() {
  const getGreeting = () => {
    let greeting = (
    getTimeOfDay() == 'morning' ?
    'Goede morgen!'
    :
    getTimeOfDay() == 'afternoon'
    ? 'Goede middag!'
    : 
    'Goede avond!'
    )
    return greeting;
  }

  const getTimeOfDay = () => {
    let time = new Date().getHours();
    let period = time < 12 ? 'morning' : time >= 12 && 18 ? 'afternoon' : 'evening';
    return period;
  }
  
  return (
    <div id='widgetContainer'>
      <Greeting text={getGreeting()} />
      <Logo NSlogo={'./../assets/NS-logo.png'}/>
      <Weather />
      <Widget title={'Social media'} className={'widget-bottom-left'}>
        <p>child 1</p>
        <p>child 2</p>
      </Widget>
      <Widget title={'Nieuwsbrief'} className={'widget-center-left'}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ut veritatis ratione nihil ipsam quas iure dolorum repellat corporis, provident ipsa quod asperiores laborum. Porro consequuntur soluta quis beatae.</p>
      </Widget>
      <Widget title={'Vandaag'} className={'widget-center-right-top'}>
        <p>Weetje</p>
        <p>Gefeliciteeerd!</p>
      </Widget>
      <Widget title={'Events'} className={'widget-center-right-bottom'}>

      </Widget>
      <Widget title={'Utrecht CS'} className={'widget-right bg-yellow'}>

      </Widget>
    </div>
  );
}

export default App
