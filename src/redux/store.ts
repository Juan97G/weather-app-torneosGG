import { configureStore } from "@reduxjs/toolkit";

import weather from "./slices/weatherSlice";

export default configureStore({
    reducer: {
        weather
    }
});