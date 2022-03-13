import { createSlice } from "@reduxjs/toolkit";

const OriginalRidesSlice = createSlice({
    name:'OriginalRidesSlice',
    initialState:{
        originalRidesNearest:[],
        ridesFilterIdValue:[],
        originalRidesUpcoming:[],
        originalRidesPast:[],
        stateSelect:'all',
        citySelect:'all'
    },
    reducers:{
        originalRidesAddNearest: ( state, action ) => {
            let ridesData = action.payload.originalRidesNearest;
            let IdValue = action.payload.ridesFilterIdValue;
            state.originalRidesNearest = ridesData;
            state.ridesFilterIdValue = IdValue;
            console.log('from Nearest original')
        },
        originalRidesAddUpcoming: ( state, action ) => {
            let ridesData = action.payload.originalRidesUpcoming;
            state.originalRidesUpcoming = ridesData;
            console.log('from Upcoming original')
        },
        originalRidesAddPast: ( state, action ) => {
            let ridesData = action.payload.originalRidesPast;
            state.originalRidesPast = ridesData;
            console.log('from Past original')
        },
        originalChangeStateAndCity: ( state, action ) => {
            let stateAndCityValue = action.payload.stateAndCityValue;
            if( stateAndCityValue === 'state' ){
                state.stateSelect = action.payload.stateAndCity;
            }else if( stateAndCityValue === 'city' ){
                state.citySelect = action.payload.stateAndCity;
            }
        }
    }
})

export const { 
    originalRidesAddNearest,
    originalRidesAddUpcoming,
    originalRidesAddPast,
    originalChangeStateAndCity } = OriginalRidesSlice.actions;

export default OriginalRidesSlice.reducer;