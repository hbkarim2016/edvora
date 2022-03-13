
import { useDispatch, useSelector } from 'react-redux';
import ApiRides from '../../apis/ApiRides';
import './Rides.css';
import DateFunc from '../Date/DateFunc';
import {Routes,Route} from "react-router-dom";

const Rides = () => {

    const { userState, dataCheck } = useSelector( state => state.rideStore )
    const { 
        originalRidesNearest,
        ridesFilterIdValue,
        originalRidesPast,
        originalRidesUpcoming} = useSelector( state => state.originalStore )

    const dispatch = useDispatch();

    if( userState.length !== 0 ){
        ApiRides(userState ,dispatch,dataCheck)
    }

    return(
        <div className="rides">
            <div className="container">
                { originalRidesNearest !== undefined &&
                    <Routes>
                    {/* NEAREST RIDES */}
                        <Route path='/' 
                            element={
                            originalRidesNearest.length > 0 ?
                                originalRidesNearest.map( (el,indx) => {
                                    return(
                                        <div className="ride-single" key={ el.id }>
                                            <div className='ride-single-content'>
                                                <div className='ride-single-img'></div>
                                                <div className='ride-single-data'>
                                                    <h2>Ride Id : <span>{ el.id }</span></h2>
                                                    <h2>Origin Station : <span>{ el.origin_station_code }</span></h2>
                                                    <h2>station_path : <span>[{ 
                                                                                    el.station_path.map( (el_, indx_) => 
                                                                                        indx_ + 1 !== el.station_path.length ? el_ + ',' : el_ 
                                                                                    ) 
                                                                                }]</span></h2>
                                                    <h2>Date : <span>{`
                                                                        ${DateFunc(el.date).day < 10 ? '0' + DateFunc(el.date).day : DateFunc(el.date).day}th 
                                                                        ${DateFunc(el.date).month} 
                                                                        ${DateFunc(el.date).year} 
                                                                        ${DateFunc(el.date).hours < 10 ? '0' + DateFunc(el.date).hours : DateFunc(el.date).hours}
                                                                        :
                                                                        ${DateFunc(el.date).minutes < 10 ? '0' + DateFunc(el.date).minutes : DateFunc(el.date).minutes}
                                                                    `}</span></h2>
                                                    <h2>Distance : <span>{ridesFilterIdValue[indx]}</span></h2>
                                                </div>
                                            </div>
                                            <div className='ride-single-option'>
                                                <div>{ el.city }</div>
                                                <div>{ el.state }</div>
                                            </div>
                                        </div>
                                    )})
                                :
                                    <div className="ride-single not-found"> Not Rides Here </div>                                            
                                }/>
                    {/* UPCOMING RIDES */}
                    <Route path='upcoming'
                        element={
                            originalRidesUpcoming.length > 0 ?
                                originalRidesUpcoming.map( (el,indx) => {
                                    return(
                                        <div className="ride-single" key={ el.id }>
                                            <div className='ride-single-content'>
                                                <div className='ride-single-img'></div>
                                                <div className='ride-single-data'>
                                                    <h2>Ride Id : <span>{ el.id }</span></h2>
                                                    <h2>Origin Station : <span>{ el.origin_station_code }</span></h2>
                                                    <h2>station_path : <span>[{ 
                                                                                    el.station_path.map( (el_, indx_) => 
                                                                                        indx_ + 1 !== el.station_path.length ? el_ + ',' : el_ 
                                                                                    ) 
                                                                                }]</span></h2>
                                                    <h2>Date : <span>{`
                                                                        ${DateFunc(el.date).day < 10 ? '0' + DateFunc(el.date).day : DateFunc(el.date).day}th 
                                                                        ${DateFunc(el.date).month} 
                                                                        ${DateFunc(el.date).year} 
                                                                        ${DateFunc(el.date).hours < 10 ? '0' + DateFunc(el.date).hours : DateFunc(el.date).hours}
                                                                        :
                                                                        ${DateFunc(el.date).minutes < 10 ? '0' + DateFunc(el.date).minutes : DateFunc(el.date).minutes}
                                                                    `}</span></h2>
                                                    <h2>Distance : <span>0</span></h2>
                                                </div>
                                            </div>
                                            <div className='ride-single-option'>
                                                <div>{ el.city }</div>
                                                <div>{ el.state }</div>
                                            </div>
                                        </div>
                                    )})
                        :
                            <div className="ride-single not-found"> Not Rides Here </div>
                        }/>

                    {/* PAST RIDES */}
                    <Route path='past'
                        element={
                        originalRidesPast.length > 0 ?
                            originalRidesPast.map( (el,indx) => {
                                return(
                                    <div className="ride-single" key={ el.id }>
                                        <div className='ride-single-content'>
                                            <div className='ride-single-img'></div>
                                            <div className='ride-single-data'>
                                                <h2>Ride Id : <span>{ el.id }</span></h2>
                                                <h2>Origin Station : <span>{ el.origin_station_code }</span></h2>
                                                <h2>station_path : <span>[{ 
                                                                                el.station_path.map( (el_, indx_) => 
                                                                                    indx_ + 1 !== el.station_path.length ? el_ + ',' : el_ 
                                                                                ) 
                                                                            }]</span></h2>
                                                <h2>Date : <span>{`
                                                                    ${DateFunc(el.date).day < 10 ? '0' + DateFunc(el.date).day : DateFunc(el.date).day}th 
                                                                    ${DateFunc(el.date).month} 
                                                                    ${DateFunc(el.date).year} 
                                                                    ${DateFunc(el.date).hours < 10 ? '0' + DateFunc(el.date).hours : DateFunc(el.date).hours}
                                                                    :
                                                                    ${DateFunc(el.date).minutes < 10 ? '0' + DateFunc(el.date).minutes : DateFunc(el.date).minutes}
                                                                `}</span></h2>
                                                <h2>Distance : <span>0</span></h2>
                                            </div>
                                        </div>
                                        <div className='ride-single-option'>
                                            <div>{ el.city }</div>
                                            <div>{ el.state }</div>
                                        </div>
                                    </div>
                                )})
                        :
                            <div className="ride-single not-found"> Not Rides Here </div>                                               
                        }/>
                    <Route path='*' element={<div className="ride-single not-found"> Not Rides Here </div>}/>
                </Routes>
                }
            </div>
        </div>
    )
}
export default Rides;