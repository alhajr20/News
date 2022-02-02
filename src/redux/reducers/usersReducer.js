const initialState = {
    admin: {
        login: 'Admin',
        password: 'admin1234',
        activated: false,
    },
    user: {
        login: 'User',
        password: 'user1234',
        activated: false,
    }
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_ADMIN":
            return {
                ...state,
                admin: {
                    login: 'Admin',
                    password: 'admin1234',
                    activated: true,
                }
            }
        case "LOGIN_USER":
            return {
                ...state,
                user: {
                    login: 'User',
                    password: 'user1234',
                    activated: true,
                }
            }
        case "LOGOUT":
            return {
                ...state,
                admin: {
                    login: 'Admin',
                    password: 'admin1234',
                    activated: false,
                },
                user: {
                    login: 'User',
                    password: 'user1234',
                    activated: false,
                }
            }
        default:
            return state;
    }
}

export default usersReducer;