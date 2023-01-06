import React, {useState} from 'react';
import css from "./WeatherData.module.css";
import Img from "../../assets/img/10d@2x.png";

const WeatherData = () => {

    const [show, setShow] = useState<boolean>(false);

    return (
        <div className={css.container}>
            {
                show
                    ? (
                        <>
                            <div className={css.temperature}>
                                <div className={css.temperatureValue}>
                                    18 <span>°C</span>
                                </div>
                                <div className={css.temperatureIcon}>
                                    <img src={Img} alt="Icon weather" width={120}/>
                                    <h3>Rainy</h3>
                                </div>
                            </div>

                            <div className={css.humidityAndWind}>
                                <div className={css.humidityAndWindDetails}>
                                    <h4>Humidity</h4>
                                    <span>62%</span>
                                </div>
                                <div className={css.humidityAndWindDetails}>
                                    <h4>Wind Speed</h4>
                                    <span>20 METER/SEC</span>
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
