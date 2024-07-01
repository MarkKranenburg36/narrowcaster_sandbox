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
        <WidgetContainerVandaag title={'Gefeliciteerd'}>
          <p>henk & dirk!</p>
        </WidgetContainerVandaag>
      </Widget>
      <Widget title={'Events'} className={'widget-center-right-bottom'}>
      <WidgetContainerEvents>
          <p>Event A</p>
        </WidgetContainerEvents>
        <WidgetContainerEvents>
          <p>Event B</p>
        </WidgetContainerEvents>
      </Widget>
      <Widget title={'Utrecht CS'} className={'widget-right bg-yellow'} NSlogo={NSlogo}>

      </Widget>
    </div>
  );
}

export default App


// EAA1qqeJZCfYEBO4RO5qsfd0oRJz5CMCTu7BVuJISQz3afR1lpE6e2eKecyAbNyg8gLrwvTTBdIfZCkjRpCZBxflWlUZBwyRu0NmgjsxJfPfAzfAEENTLaWnMF29HijW4CaZBv6wZAiddlMVL2tTInlhb5xbpZAEtua8hSVcfyK7ZA03WPCt55jD5ZBdnkxY9Efoo3G3lWAWXR2GU8BvlHKP2L1JrWkR0mlzhzd31GrgWTyFyhW3w2GfG9L4OObG47HLzvGrGk7gZDZD
