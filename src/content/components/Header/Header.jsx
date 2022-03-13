import './Header.css';
import { useSelector } from 'react-redux';

const Header = () => {
    const { userState } = useSelector( state => state.rideStore );

    return(
        <header>
            <div className="container">
                <div className='logo'>
                    <h1>Edvora</h1>
                </div>
                { userState !== undefined && 
                    <div className='user'>
                        <h2>{ userState.name }</h2>
                        <div className='user-img'>
                            <img src={ userState.url } alt='user img' />
                        </div>
                    </div>
                }
                
            </div>
        </header>
    )
}
export default Header;