import { useEffect, useState } from 'react'
import './App.css'

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

  return (
    <>
      <h1>weatherData</h1>
      <ul>
        {weatherData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App
