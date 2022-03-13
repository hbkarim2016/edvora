import axios from 'axios';
import { originalRidesAddNearest, originalRidesAddPast, originalRidesAddUpcoming } from '../redux/reducers/OriginalRidesSlice';
import { rideAdd } from '../redux/reducers/RideSlice';

const ApiRides = (userState,dispatch,dataCheck) => {

    let ridesIds = [];
    let ridesIdsFilter = [];
    let ridesIdsFilterSort = [];

    axios.get('https://assessment.api.vweb.app/rides').then(

        res => {
                let response = res.data;
                let userStation = userState.station_code;
                let ridesNear = response.map( (el,indx) => {
                    ridesIds[indx] = el.station_path.map( el_ => {
                        let value = el_ - userStation > 0 ? el_ - userStation :  userStation - el_
                        return value
                    } )
                    let ridesIdValue = Math.min(...ridesIds[indx]);
                    return { ridesIdValue, rideData:el }
                } )
                console.log(userStation)
                ridesIdsFilter = Array.from(ridesNear.reduce( (map, obj) => map.set(obj.ridesIdValue,obj) , new Map() ).values())
                ridesIdsFilterSort = ridesIdsFilter.sort( (a,b) => {
                    if(a.ridesIdValue > b.ridesIdValue){
                        return 1;
                    }if(a.ridesIdValue < b.ridesIdValue){
                        return -1;
                    }return 0;
                })
                /* NEAREST DATA */
                let ridesFilter = ridesIdsFilterSort.map( el => el.rideData )
                /* GET TIME NOW */
                const timeNow = new Date();
                let timeNow_ = timeNow.getTime();
                /* UPCOMING */
                let originalUpcoming = ridesFilter.filter( el => new Date(el.date).getTime() > timeNow_ );
                /* PAST */
                let originalPast = ridesFilter.filter( el => new Date(el.date).getTime() <  timeNow_ );
                /* DISPATCH DATA TO ORIGINAL STORE */
                if( dataCheck !== 0 && ridesFilter.length > 0 ){
                    console.log(ridesFilter);
                    console.log(originalUpcoming);
                    console.log(originalPast);
                    try{
                        dispatch( rideAdd( 
                            {   rides_data:ridesFilter,
                                ridesUpcoming_data:originalUpcoming,
                                ridesPast_data:originalPast, 
                                upcomingCount:originalUpcoming.length, 
                                pastCount:originalPast.length} 
                        ) )
                        dispatch( originalRidesAddNearest( {originalRidesNearest:ridesFilter}) )
                        dispatch( originalRidesAddUpcoming( {originalRidesUpcoming:originalUpcoming} ) );
                        dispatch( originalRidesAddPast( {originalRidesPast:originalPast} ) );
                    }catch(err){
                        console.log(err)
                    }
                }
            }

    )
    
} 

export default ApiRides;
