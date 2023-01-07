import React from 'react';
import Layout from "./components/Layout";
import Form from "./components/Form";
import WeatherData from "./components/WeatherData";
import {Toaster} from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    return (

        <Provider store={store}>
            <Layout>
                <Form />
                <WeatherData />
                <Toaster />
            </Layout>
        </Provider>
    );
}

export default App;
