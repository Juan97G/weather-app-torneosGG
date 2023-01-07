export type WeatherData = {
    weatherMain: string;
    weatherIcon: string;
    temp:        number;
    humidity:    number;
    wind:        number;
    dt:          number;
    timezone:    number;
    units:       string;
    loading?:    boolean;
    error?:      boolean;
}

export type DataForm = {
    city: string;
    celsius: boolean;
    fahrenheit?: boolean;
}