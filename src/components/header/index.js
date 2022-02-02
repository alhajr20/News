import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginAdmin, loginUser, logout } from '../../redux/actions';

import logo from '../../assets/img/logo.svg';
import './style.scss';
import reducer from '../../redux/reducers/reducer';

const Header = () => {
    const { user, admin } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [windowActive, setWindowActive] = useState(false);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const checkForm = () => {

        if (login === user.login && password === user.password) {

            dispatch(loginUser());
            setWindowActive(false);
            setError(false);
            return;
        } else if (login === admin.login && password === admin.password) {

            dispatch(loginAdmin());
            setWindowActive(false);
            setError(false);
            return;
        } else {
            return setError(true);
        }
    }

    return (
        <>
            <header className='header'>
                <div className='container'>
                    <div className='header__flex'>
                        <div className='header__logo'>
                            <Link to="/">
                                <img src={logo} alt="logo"/>
                            </Link>
                        </div>
                        <div className='header__right'>
                            {admin.activated ? <Link to="/saved">Saved</Link> : ''}
                            {admin.activated ? '' : user.activated ? '' : <button className='btn' onClick={() => setWindowActive(!windowActive)}>Login</button>}
                            {admin.activated ? <div className='header__account header__account-admin'>A</div> : user.activated ? <div className='header__account header__account-user'>U</div> : ''}
                            {admin.activated || user.activated ? <button className='btn logout' onClick={() => dispatch(logout())}>Logout</button> : ''}
                        </div>
                    </div>
                </div>
            </header>
            <div className={`modal-window ${windowActive ? 'modal-window-active' : ''}`}>
                <div className='mw__wrapper'>
                    <button className='close' onClick={() => setWindowActive(!windowActive)}>&times;</button>
                    {error ? <div style={{color: 'red'}}>Incorrect login or password</div> : ''}
                    <form className='form'>
                        <div className='form__group'>
                            <input type="text" placeholder='Login' onChange={(e) => setLogin(e.target.value)} />
                        </div>
                        <div className='form__group'>
                            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type='button' onClick={() => checkForm()}>Sign in</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Header;