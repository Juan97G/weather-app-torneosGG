import React from 'react';
import Layout from "./components/Layout";
import Form from "./components/Form";
import WeatherData from "./components/WeatherData";

function App() {
    return (
        <Layout>
            <Form />
            <WeatherData />
        </Layout>
    );
}

export default App;
