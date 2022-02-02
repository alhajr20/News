import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { addNews, deleteNew } from "../redux/actions";

const Saved = () => {
    const { admin } = useSelector(state => state.users);
    const { savedNews } = useSelector(state => state.news);

    const dispatch = useDispatch();

    const addNewsEvent = (id) => {
        
        const obj = savedNews.find(item => item.id === id);

        const newArr = savedNews.filter(item => item.id !== id);

        dispatch(deleteNew(newArr));
        return dispatch(addNews(obj));
    }

    const deleteNewsEvent = (id) => {
        const newArr = savedNews.filter(item => item.id !== id);

        return dispatch(deleteNew(newArr));
    }

    if (!admin.activated) {
        return <Navigate to="/" />
    }

    return (
        <section className="saved">
            <div className="container">
                <div className="saved__wrapper">
                    {savedNews.map((item, i) => (
                        <div className="saved__item" key={i}>
                            <h3>{item.title}</h3>
                            <p>
                                {item.text}
                            </p>
                            <div className="date">{item.date}</div>
                            <button className="btn" onClick={() => deleteNewsEvent(item.id)}>Delete</button>
                            <button className="btn add" onClick={() => addNewsEvent(item.id)} >Add</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Saved;