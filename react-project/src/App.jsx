import './App.css'
import { Weather } from './Components/Weather';
import { Greeting } from './Components/Greeting';
import Widget from './Components/Widget';
import { Logo } from './Components/Logo';
import NSlogo from './assets/NS-logo.png';
import { FunFact } from './Components/FunFact';
import WidgetContainerVandaag from './Components/WidgetContainerVandaag';
import WidgetContainerEvents from './Components/WidgetContainerEvents';
import lightBulp from './assets/lightbulpIcon.png';
import gefeliciteerd from './assets/gefeliciteerd.png';
import TrainDataContainer from './Components/TrainDataContainer';

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
    let period = time < 12 ? 'morning' : (time >= 12 && time < 18 ? 'afternoon' : 'evening');
    return period;
  }

  return (
    <div id='widgetContainer'>
      <Greeting text={getGreeting()} />
      <Logo />
      <Weather />
      <Widget title={'Social media'} className={'widget-bottom-left'}>
        <p>child 1</p>
        <p>child 2</p>
      </Widget>
      <Widget title={'Nieuwsbrief'} className={'widget-center-left'}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi corrupti culpa qui natus ab magni molestiae ut quae animi illo. Consequuntur at, eius impedit incidunt quod repellendus sed similique dolorum?
          Illum, consequatur, facere saepe provident explicabo ipsa asperiores, ullam odit quis vero aspernatur. Voluptatum vero ratione eligendi fugiat nam, quam natus optio ipsa. Eius eveniet reiciendis, possimus laborum officia saepe!
          Repellat quae soluta temporibus? Rem maiores provident temporibus eum, ad cum. Error optio odit doloremque molestias voluptate nobis iusto neque velit officiis voluptatem, assumenda deleniti commodi aut, ducimus non inventore.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iusto excepturi ipsam molestiae enim quia. Earum, necessitatibus
          molestiae voluptatum consectetur nemo quisquam magni molestias voluptatibus, alias exercitationem, laboriosam dicta eum?</p>
      </Widget>
      <Widget title={'Vandaag'} className={'widget-center-right-top'}>
        <WidgetContainerVandaag title={'Weetje!'} icon={lightBulp} className={'bgWhite'}>
          <FunFact />
        </WidgetContainerVandaag>
        <WidgetContainerVandaag title={'Gefeliciteerd'} icon={gefeliciteerd} className={'bgWhite'}>
          <p className='vandaagContent'>henk & dirk!</p>
        </WidgetContainerVandaag>
      </Widget>
      <Widget title={'Events'} className={'widget-center-right-bottom'}>
        <WidgetContainerEvents className={'bgBlue'}>
          <h4>Event A</h4>
          <h5>Omschrijving</h5>
          <div className="eventDateContainer">
            <p className="eventDateDay">25</p>
            <p className="eventDateMonth">JUL</p>
          </div>
        </WidgetContainerEvents>
        <WidgetContainerEvents className={'bgBlue'}>
          <h4>Event B</h4>
          <h5>Omschrijving</h5>
          <div className="eventDateContainer">
            <p className="eventDateDay">25</p>
            <p className="eventDateMonth">JUL</p>
          </div>
        </WidgetContainerEvents>
        <WidgetContainerEvents className={'bgBlue'}>
          <h4>Event C</h4>
          <h5>Omschrijving</h5>
          <div className="eventDateContainer">
            <p className="eventDateDay">25</p>
            <p className="eventDateMonth">JUL</p>
          </div>
        </WidgetContainerEvents>
      </Widget>
      <Widget title={'Utrecht CS'} className={'widget-right bg-yellow-light padding-x-0'} NSlogo={NSlogo} headerClassName={'margin-left-32px'}>
        <TrainDataContainer className={'bg-yellow-dark rem-height-2'}/>
        <TrainDataContainer
          className={'TrainDataContainer bg-yellow-light'}
          time={'07:20'}
          destination={'Amsterdam'}
          platformIcon={''}
        >
        </TrainDataContainer>
        <TrainDataContainer
          className={'TrainDataContainer bg-yellow-dark'}
          destination={'Schiedam'}
          time={'15:15'}
          platformIcon={''}
        >
        </TrainDataContainer>
      </Widget>
    </div>
  );
}

export default App
