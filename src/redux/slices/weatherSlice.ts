import {createSlice} from "@reduxjs/toolkit";
import {DataForm} from "../../types";
import axios from "axios";

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weatherMain: '',
        weatherIcon: '',
        temp: 0,
        humidity: 0,
        wind: 0,
        dt: 0,
        timezone: 0,
        loading: false,
        units: '',
        error: false
    },
    reducers: {
        setDataWeather: (state, action)=> {
            state.weatherMain = action.payload.weatherMain;
            state.weatherIcon = action.payload.weatherIcon;
            state.temp = action.payload.temp;
            state.humidity = action.payload.humidity;
            state.wind = action.payload.wind;
            state.units = action.payload.units;
            state.dt = action.payload.dt;
            state.timezone = action.payload.timezone;
        },

        setChangeLoading: (state, action) => {
            state.loading = action.payload;
        },

        setStateError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const {
    setDataWeather,
    setChangeLoading,
    setStateError
} = weatherSlice.actions;

export default weatherSlice.reducer;


export const fetchDataWeather = (dataForm: DataForm) => {
    return async (dispatch: any) => {
        try {
            dispatch(setChangeLoading(true));
            const {city, celsius} = dataForm;
            const appId = 'dfb59c1dd2b6488034b88b0573314017';

            const urlLatLon = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${appId}`;
            let response = await axios(urlLatLon);

            const {lat, lon} = response.data[0];

            const units = celsius ? 'metric' : 'imperial';

            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=${units}`;
            response = await axios(urlWeather);

            const objWeather = {
                weatherMain: response.data.weather[0].main,
                weatherIcon: response.data.weather[0].icon,
                temp: response.data.main.temp,
                humidity: response.data.main.humidity,
                wind: response.data.wind.speed,
                dt: response.data.dt,
                timezone: response.data.timezone,
                units
            }

            dispatch(setDataWeather(objWeather));
        } catch (err) {
            dispatch(setStateError(true));
        } finally {
            dispatch(setChangeLoading(false));
        }
    }
}
