import { fetchWeatherData } from "../Api";
import { useState } from "react";
import { useEffect } from "react";
import Widget from "./Widget";

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

    return (
        <Widget title={'Weather'}>
            <ul>
                <li>{currentDayOfWeek}</li>
                <li>{currentDate.getDate()} {currentMonth}</li>
                <li>{localTemp}</li>
                <li><img src={weatherIcon} /></li>
            </ul>
        </Widget>
    );
};