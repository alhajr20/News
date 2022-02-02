import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNew } from '../../redux/actions';

import './style.scss';

const AddNew = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const saveNews = () => {
        const generatedId = Math.floor(Math.random() * 1000);
        const date = new Date().toLocaleDateString();

        const obj = {
            id: generatedId,
            title: title,
            text: text,
            date: date,
        }

        return obj;
    }

    return (
        <div className='add-new'>
            <h2>Add news</h2>
            <form className='an__form'>
                <div className='an__input'>
                    <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='an__input'>
                    <textarea placeholder='Text' onChange={(e) => setText(e.target.value)}></textarea>
                </div>
                <button type="button" className='btn' onClick={() => dispatch(saveNew(saveNews()))}>Add</button>
            </form>
        </div>
    );
}

export default AddNew;