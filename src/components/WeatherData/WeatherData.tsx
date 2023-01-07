import React, {useState} from 'react';
import css from "./WeatherData.module.css";

import {calculateCurrentTime} from "../../utils";
import {useAppSelector} from "../../redux/store";

const WeatherData = () => {

    /* HOOKS */
    const weatherInfo = useAppSelector(state => state.weather);

    return (
        <div className={css.container}>
            {
                weatherInfo.weatherMain !== ''
                    ? (
                        <>
                            <div className={css.temperature}>
                                <div className={css.temperatureValue}>
                                    {Math.floor(weatherInfo.temp)}
                                    <span>°{weatherInfo.units === 'metric' ? 'C' : 'F'}</span>
                                </div>
                                <div className={css.temperatureIcon}>
                                    <img
                                        src={`http://openweathermap.org/img/wn/${weatherInfo.weatherIcon}@2x.png`}
                                        alt="Icon weather"
                                        width={120}/>
                                    <h3>{weatherInfo.weatherMain}</h3>
                                </div>
                            </div>

                            <p className={css.time}>Current time {calculateCurrentTime(weatherInfo.dt, weatherInfo.timezone)}</p>

                            <div className={css.humidityAndWind}>
                                <div className={css.humidityAndWindDetails}>
                                    <h4>Humidity</h4>
                                    <span>{weatherInfo.humidity}%</span>
                                </div>
                                <div className={css.humidityAndWindDetails}>
                                    <h4>Wind Speed</h4>
                                    <span>
                                        {weatherInfo.wind}
                                        {weatherInfo.units === 'metric' ? ' METER/SEC' : ' MILES/HOUR'}</span>
                                </div>
                            </div>
                        </>
                    )
                    : <p style={{textAlign: 'center', fontSize: '18px'}}>Type a city to search for weather information</p>
            }
        </div>
    );
};

export default WeatherData;
