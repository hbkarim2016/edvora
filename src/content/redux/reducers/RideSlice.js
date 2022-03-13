import { createSlice } from "@reduxjs/toolkit";

const RideSlice = createSlice({
    name:'RideSlice',
    initialState:{
        ridesNearState:[],
        ridesUpcomingState:[],
        ridesPastState:[],
        userState:[],
        dataCheck:1,
        upcomingCount:0,
        pastCount:0
    },
    reducers:{
        rideAdd: ( state, action ) => {
            let ridesData = action.payload.rides_data;
            let ridesUpcomingCount = action.payload.upcomingCount;
            let ridesUpcomingData = action.payload.ridesUpcoming_data;
            let ridesPastCount = action.payload.pastCount;
            let ridesPastData = action.payload.ridesPast_data;
            state.upcomingCount = ridesUpcomingCount;
            state.pastCount = ridesPastCount;
            state.ridesNearState = ridesData;
            state.ridesUpcomingState = ridesUpcomingData;
            state.ridesPastState = ridesPastData;
            state.dataCheck = 0;
            console.log('from api ride')
        },
        userAdd: ( state, action ) => {
            let userData = action.payload.user_data;
            state.userState = userData;
        },
        changeUpandPastCounts: (state,action) => {
            state.upcomingCount = action.payload.upcomingCount;
            state.pastCount = action.payload.pastCount;
        }
    }
})

export const { rideAdd, userAdd, changeUpandPastCounts } = RideSlice.actions;
export default RideSlice.reducer;