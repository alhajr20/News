import data from '../../data';

const initialState = {
    news: data,
    savedNews: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "SAVE_NEW":
            state.savedNews.push(action.payload);
            return {
                ...state
            }
        case "ADD_NEWS":
            state.news.push(action.payload);
            return {
                ...state
            }
        case "DELETE_NEW":
            return {
                ...state,
                savedNews: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;