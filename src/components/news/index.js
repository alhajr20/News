import { useState } from 'react';
import { useSelector } from 'react-redux';
import AddNew from '../addNew';
import New from '../new';
import './style.scss';

const News = () => {
    const { news } = useSelector(state => state.news);
    const { user } = useSelector(state => state.users);

    const [value, setValue] = useState('');

    const foundNews = news.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));

    return (
        <section className='news'>
            <div className='container'>
                <h2 className='news__title'>News</h2>
                <form className='news__search'>
                    <input type="text" placeholder='Search' className='news__input' onChange={(e) => setValue(e.target.value)} />
                </form>
                <div className='news__wrapper'>
                    {foundNews.map((item, i) => (
                        <New title={item.title} text={item.text} date={item.date} key={i} />
                    ))}
                </div>
                {user.activated ? <AddNew/> : ''}
            </div>
        </section>
    );
}

export default News;