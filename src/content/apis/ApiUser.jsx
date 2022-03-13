import axios from 'axios';
import { userAdd } from '../redux/reducers/RideSlice';

const ApiUser = (setRides) => {
    axios
            .get('https://assessment.api.vweb.app/user')
            .then( res => setRides(userAdd({user_data:res.data})) )
    console.log( 'from user' )
} 

export default ApiUser;
