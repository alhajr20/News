export const loginAdmin = () => ({type: 'LOGIN_ADMIN'});
export const loginUser = () => ({type: 'LOGIN_USER'});
export const logout = () => ({type: 'LOGOUT'});

export const saveNew = (obj) => ({type: 'SAVE_NEW', payload: obj});
export const addNews = (obj) => ({type: 'ADD_NEWS', payload: obj});
export const deleteNew = (obj) => ({type: 'DELETE_NEW', payload: obj});