import { useSelector } from 'react-redux';
import './style.scss';

const Promo = () => {
    const { user, admin } = useSelector(state => state.users);

    return (
        <section className='promo'>
            <div className='container'>
                <div className='promo__info'>
                    <h1 className='promo__title'>Hello, {user.activated ? 'User' : admin.activated ? 'Admin' : 'Visitor'}</h1>
                </div>
            </div>
        </section>
    );
}

export default Promo;