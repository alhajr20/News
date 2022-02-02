import './style.scss';

const New = ({ title, text, date }) => {

    return (
        <div className='new'>
            <h3 className='new__title'>{title}</h3>
            <p className='new__text'>
                {text}
            </p>
            <div className='new__date'>{date}</div>
        </div>
    );
}

export default New;