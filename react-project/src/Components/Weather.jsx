import { fetchWeatherData } from "../Api";
import { useState } from "react";
import { useEffect } from "react";
import Widget from "./Widget";
import './Weather.css';

export const Weather = () => {
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
    const localTemp = weatherData.current.temp_c.toString().slice(0, 2) + '°C';
    const weatherIcon = weatherData.current.condition.icon;

    const isRaining = weatherData.current.condition.text.toLowerCase().includes('rain');
    const isCloudy = weatherData.current.condition.text.toLowerCase().includes('cloudy');
    const isSunny = weatherData.current.condition.text.toLowerCase().includes('sunny');


    const getWeatherClass = () => {
        if (isRaining) return 'backGroundRain';
        if (isCloudy) return 'backGroundCloudy';
        if (isSunny) return 'backGroundSunny';
        return '';
    }

    return (
        <Widget className={'widget-top-left'}>
            <div id="weatherContainer"
                className={getWeatherClass()}>
                <ul className="align-items-start">
                    <li id="dayOfWeek">{currentDayOfWeek}</li>
                    <li>{currentDate.getDate()} {currentMonth}</li>
                </ul>
                <ul className="align-items-end">
                    <li><img id="weatherIcon" src={weatherIcon} /></li>
                    <li>{localTemp}</li>
                </ul>
            </div>
        </Widget>
    );
};