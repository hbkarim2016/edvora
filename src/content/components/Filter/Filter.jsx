import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Filter.css';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { originalRidesAddNearest, 
        originalRidesAddUpcoming, 
        originalRidesAddPast, 
        originalChangeStateAndCity } from '../../redux/reducers/OriginalRidesSlice';
import { changeUpandPastCounts } from '../../redux/reducers/RideSlice';
const Filter = () => {

    const dispatch = useDispatch();

    const { ridesNearState, 
            ridesUpcomingState, 
            ridesPastState, 
            upcomingCount, 
            pastCount } = useSelector( state => state.rideStore );
    
    const { stateSelect,citySelect } = useSelector( state => state.originalStore );
    const filterRef = useRef();
    const stateRef = useRef();
    const cityRef = useRef();

    const handleFilterShow = e => {
        e.target.parentElement.classList.toggle('active')
        filterRef.current.classList.toggle('active')
    }

    const handleFilterSelect = refValue => {
        refValue.current.classList.toggle('active')
    }

    const handleFilterSelectValue = e => {
        let filterSelectValue = e.target.getAttribute('name');
        let filterField = e.target.parentElement.parentElement.id;
        dispatch( originalChangeStateAndCity({ stateAndCityValue:filterField,stateAndCity:filterSelectValue }) )
        if( filterSelectValue === 'all' ){
            dispatch( originalRidesAddNearest({ originalRidesNearest:ridesNearState }) )
            dispatch( originalRidesAddUpcoming({ originalRidesUpcoming:ridesUpcomingState }) )
            dispatch( originalRidesAddPast({ originalRidesPast:ridesPastState }) )
            dispatch( changeUpandPastCounts({ upcomingCount: ridesUpcomingState.length,pastCount: ridesPastState.length }) )
        }else if( filterSelectValue !== 'all' && filterField === 'state' ){
            let OrigNearState = ridesNearState.filter( el => el.state === filterSelectValue );
            let OrigUpcomingState = ridesUpcomingState.filter( el => el.state === filterSelectValue );
            let OrigPastState = ridesPastState.filter( el => el.state === filterSelectValue );
            OrigNearState.length > 0 ? 
                dispatch( originalRidesAddNearest({ originalRidesNearest:OrigNearState }) )
            :
                dispatch( originalRidesAddNearest({ originalRidesNearest:0 }) )
            OrigUpcomingState.length > 0 ? 
                dispatch( originalRidesAddUpcoming({ originalRidesUpcoming:OrigUpcomingState }) )
            :
                dispatch( originalRidesAddUpcoming({ originalRidesUpcoming:0 }) )
            OrigPastState.length > 0 ? 
                dispatch( originalRidesAddPast({ originalRidesPast:OrigPastState }) )
            :
                dispatch( originalRidesAddUpcoming({ originalRidesUpcoming:0 }) )
            
            dispatch( changeUpandPastCounts({ upcomingCount: OrigUpcomingState.length,pastCount: OrigPastState.length }) )
        }else if( filterSelectValue !== 'all' && filterField === 'city' ){
            let OrigNearState = ridesNearState.filter( el => el.city === filterSelectValue );
            let OrigUpcomingState = ridesUpcomingState.filter( el => el.city === filterSelectValue );
            let OrigPastState = ridesPastState.filter( el => el.city === filterSelectValue );
            OrigNearState.length > 0 ? 
                dispatch( originalRidesAddNearest({ originalRidesNearest:OrigNearState }) )
            :
                dispatch( originalRidesAddNearest({ originalRidesNearest:0 }) )
            OrigUpcomingState.length > 0 ? 
                dispatch( originalRidesAddUpcoming({ originalRidesUpcoming:OrigUpcomingState }) )
            :
                dispatch( originalRidesAddUpcoming({ originalRidesUpcoming:0 }) )
            OrigPastState.length > 0 ? 
                dispatch( originalRidesAddPast({ originalRidesPast:OrigPastState }) )
            :
                dispatch( originalRidesAddUpcoming({ originalRidesUpcoming:0 }) )
            
            dispatch( changeUpandPastCounts({ upcomingCount: OrigUpcomingState.length,pastCount: OrigPastState.length }) )
        }else if( 
            (stateSelect !== 'all' && filterSelectValue === 'all') || 
            (citySelect !== 'all' && filterSelectValue === 'all') ){
                if( stateSelect !== 'all' ){
                    let nearFilterCity = ridesNearState.filter( el => el.city === filterSelectValue );
                    let finallyNear = nearFilterCity.filter( el => el.state === stateSelect );
                    let upcomingFilterCity = ridesUpcomingState.filter( el => el.city === filterSelectValue );
                    let finallyUpcoming = upcomingFilterCity.filter( el => el.state === stateSelect );
                    let pastFilterCity = ridesPastState.filter( el => el.city === filterSelectValue );
                    let finallyPast = pastFilterCity.filter( el => el.state === stateSelect );
                    finallyNear.length > 0 ? 
                        dispatch( originalRidesAddNearest({ originalRidesNearest:finallyNear }) )
                    :
                        dispatch( originalRidesAddNearest({ originalRidesNearest:0 }) )
                    finallyUpcoming.length > 0 ? 
                        dispatch( originalRidesAddUpcoming({ originalRidesUpcoming:finallyUpcoming }) )
                    :
                        dispatch( originalRidesAddUpcoming({ originalRidesUpcoming:0 }) )
                    finallyPast.length > 0 ? 
                        dispatch( originalRidesAddPast({ originalRidesPast:finallyPast }) )
                    :
                        dispatch( originalRidesAddUpcoming({ originalRidesUpcoming:0 }) )
                    
                    dispatch( changeUpandPastCounts({ upcomingCount: finallyUpcoming.length,pastCount: finallyPast.length }) )
                }else if( citySelect !== 'all' ){
                    let nearFilterCity = ridesNearState.filter( el => el.state === filterSelectValue );
                    let finallyNear = nearFilterCity.filter( el => el.city === citySelect );
                    let upcomingFilterCity = ridesUpcomingState.filter( el => el.state === filterSelectValue );
                    let finallyUpcoming = upcomingFilterCity.filter( el => el.city === citySelect );
                    let pastFilterCity = ridesPastState.filter( el => el.state === filterSelectValue );
                    let finallyPast = pastFilterCity.filter( el => el.city === citySelect );
                    finallyNear.length > 0 ? 
                        dispatch( originalRidesAddNearest({ originalRidesNearest:finallyNear }) )
                    :
                        dispatch( originalRidesAddNearest({ originalRidesNearest:0 }) )
                    finallyUpcoming.length > 0 ? 
                        dispatch( originalRidesAddUpcoming({ originalRidesUpcoming:finallyUpcoming }) )
                    :
                        dispatch( originalRidesAddUpcoming({ originalRidesUpcoming:0 }) )
                    finallyPast.length > 0 ? 
                        dispatch( originalRidesAddPast({ originalRidesPast:finallyPast }) )
                    :
                        dispatch( originalRidesAddUpcoming({ originalRidesUpcoming:0 }) )
                    
                    dispatch( changeUpandPastCounts({ upcomingCount: finallyUpcoming.length,pastCount: finallyPast.length }) )
                }
        }
    }

    return(
        <div className="filter">
            <div className="container">
                <div className="filter-links">
                <NavLink className={ ({isActive}) => isActive ? 'active' : '' } to={`/`}>
                    <h2>Nearest rides</h2>    
                </NavLink> 
                <NavLink className={ ({isActive}) => isActive ? 'active' : '' } to={`upcoming`}>
                    <h2>Upcoming rides ({upcomingCount})</h2>    
                </NavLink>
                <NavLink className={ ({isActive}) => isActive ? 'active' : '' } to={`past`}>
                    <h2>Past rides ({pastCount})</h2>    
                </NavLink>       
                </div>
                <div className="filter-selects">
                    <div onClick={handleFilterShow} className='filter-header'>
                        <FontAwesomeIcon icon={faArrowDownWideShort} />
                        <h2>Filter</h2>
                    </div>
                    <div ref={filterRef} className='filter-lists'>
                        <div onClick={() => handleFilterSelect(stateRef)} className='filter-state filter-single-list'>
                            <div className='filter-select-style'><FontAwesomeIcon icon={faArrowDown} /></div> 
                            <div className='filter-select-style'><h2>State ({stateSelect})</h2></div>
                        </div>
                        <div ref={stateRef} id='state' className='filter-state-list'>
                            <div onClick={handleFilterSelectValue} className='filter-single-list filter-list-items'>
                                <div className='filter-select-style' name='all'>all</div>
                            </div>
                                { 
                                ridesNearState.length > 0 &&
                                    ridesNearState.map( (el,indx) => {
                                        return(
                                            <div onClick={handleFilterSelectValue} className='filter-single-list filter-list-items' key={indx}>
                                                <div className='filter-select-style' name={el.state}>{el.state}</div>
                                            </div>
                                        )
                                    } ) }
                        </div>
                        <div onClick={() => handleFilterSelect(cityRef)} className='filter-city filter-single-list'>
                            <div className='filter-select-style'><FontAwesomeIcon icon={faArrowDown} /></div> 
                            <div className='filter-select-style'><h2>City ({citySelect})</h2></div>
                        </div>
                        <div ref={cityRef} id='city' className='filter-state-list'>
                            <div onClick={handleFilterSelectValue} className='filter-single-list filter-list-items'>
                                <div className='filter-select-style' name='all'>all</div>
                            </div>
                                { 
                                ridesNearState.length > 0 &&
                                    ridesNearState.map( (el,indx) => {
                                        return(
                                            <div onClick={handleFilterSelectValue} className='filter-single-list filter-list-items' key={indx}>
                                                <div  className='filter-select-style' name={el.city}>{el.city}</div>
                                            </div>
                                        )
                                    } ) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filter;