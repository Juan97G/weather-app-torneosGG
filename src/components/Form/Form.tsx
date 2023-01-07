import React, {useState} from 'react';
import css from "./Form.module.css";
import Switch from "react-switch";
import {ClipLoader} from "react-spinners";
import {useDispatch} from "react-redux";
import {DataForm} from "../../types";

import {fetchDataWeather} from "../../redux/slices/weatherSlice";

const Form = () => {

    /* STATES */
    const [loading, setLoading] = useState<boolean>(false);
    const [city, setCity] = useState<string>('Ibague');
    const [celsius, setCelsius] = useState<boolean>(false);
    const [fahrenheit, setFahrenheit] = useState<boolean>(false);

    const dispatch = useDispatch();

    // @ts-ignore
    dispatch(fetchDataWeather({city,celsius}));
    return (
        <div className={css.container}>
            <form>
                <div className={css.formControl}>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="e.g. Ibague"
                        value={city}
                        onChange={(ev) => setCity(ev.target.value)}
                    />
                </div>
                <div className={css.formSwitch}>
                    <Switch
                        checked={celsius}
                        onChange={() => setCelsius(!celsius)}
                        onColor="#197bb3"
                        uncheckedIcon={false}
                    />
                    <label htmlFor="">Celsius</label>
                </div>
                <div className={css.formSwitch}>
                    <Switch
                        checked={fahrenheit}
                        onChange={() => setFahrenheit(!fahrenheit)}
                        onColor="#197bb3"
                        uncheckedIcon={false}
                    />
                    <label htmlFor="">Fahrenheit</label>
                </div>
                <button type="submit" className={css.button}>
                    { loading ? <ClipLoader color="#EEE" size={25} /> : 'SEARCH' }
                </button>
            </form>
        </div>
    );
};

export default Form;
