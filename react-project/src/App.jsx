import { useEffect, useState } from 'react'
import './App.css'
import { fetchWeatherData } from './Api';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeatherData()
      .then(weatherData => {
        setWeatherData(weatherData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching weather data from weather API', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <>Fetching data...</>;
  }

  const daysOfWeek = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
  const monthsOfYear = [
    "Januari", "Februari", "Maart", "April", "Mei", "Juni",
    "Juli", "Augustus", "September", "Oktober", "November", "December"
  ];
  const currentDate = new Date();
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
  const currentMonth = monthsOfYear[currentDate.getMonth()];
  const localTemp = weatherData.current.temp_c.toString().slice(0,2) + '°C';
  const weatherIcon = weatherData.current.condition.icon;


  console.log(weatherData);

  return (
    <>
      <h1>weatherData</h1>
      <ul>
        <li>{currentDayOfWeek}</li>
        <li>{currentDate.getDate()} {currentMonth}</li>
        <li>{localTemp}</li>
        <li><img src={weatherIcon} /></li>
      </ul>
    </>
  );
}

export default App
