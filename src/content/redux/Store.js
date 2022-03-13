import { configureStore } from "@reduxjs/toolkit";
import RideSlice from "./reducers/RideSlice";
import OriginalRidesSlice from "./reducers/OriginalRidesSlice";

const Store = configureStore({
    reducer:{
        rideStore:RideSlice,
        originalStore:OriginalRidesSlice
    }
});

export default Store;