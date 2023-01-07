import React, {useState, useEffect} from 'react';
import css from "./Form.module.css";
import Switch from "react-switch";
import {ClipLoader} from "react-spinners";
import {useDispatch, useSelector} from "react-redux";
import { toast } from "react-hot-toast";

import {fetchDataWeather, setStateError} from "../../redux/slices/weatherSlice";

const Form = () => {

    /* STATES */
    const [city, setCity] = useState<string>('Cali');
    const [celsius, setCelsius] = useState<boolean>(true);
    const [fahrenheit, setFahrenheit] = useState<boolean>(false);

    /* HOOKS */
    const dispatch = useDispatch();
    // @ts-ignore
    const {loading, error} = useSelector(state => state.weather);

    useEffect(() => {
        if(error){
            toast.error('An error occurred while consulting the weather information, please try again', {
                duration: 5000,
                position: 'top-right',
                style: {
                    backgroundColor: 'var(--dark-gray)',
                    color: '#EEE'
                }
            });

            dispatch(setStateError(false));
        }
    }, [error]);


    /* FUNCTIONS */
    const handleSubmit = (ev: any) => {
        ev.preventDefault();

        if(city.trim() === ''){
            toast.error('City field is required', {
                duration: 5000,
                position: 'top-right',
                style: {
                    backgroundColor: 'var(--dark-gray)',
                    color: '#EEE'
                }
            });
            return;
        }

        if((!celsius && !fahrenheit) || (celsius && fahrenheit)){
            toast.error('A single Celsius or Fahrenheit value must be selected', {
                duration: 8000,
                position: 'top-right',
                style: {
                    backgroundColor: 'var(--dark-gray)',
                    color: '#EEE'
                }
            });
            return;
        }

        // @ts-ignore
        dispatch(fetchDataWeather({city, celsius}));
    }

    // @ts-ignore
    //dispatch(fetchDataWeather({city,celsius}));
    return (
        <div className={css.container}>
            <form onSubmit={handleSubmit}>
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
                    { loading ? <ClipLoader color="#EEE" size={22} /> : 'SEARCH' }
                </button>
            </form>
        </div>
    );
};

export default Form;
