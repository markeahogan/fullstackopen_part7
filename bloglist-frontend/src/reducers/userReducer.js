import loginService from '../services/loginService';
import userService from '../services/usersService';
import blogService from '../services/blogs';

const USER_LOCAL = 'loggedBlogUser';

export const tryLoginWithLocalStorage = () => {
    return async dispatch => {
        console.log("loggedUserJSON");
        const loggedUserJSON = JSON.parse(window.localStorage.getItem(USER_LOCAL));
        if (loggedUserJSON) {
            setUser(dispatch, loggedUserJSON);
        }
        console.log(loggedUserJSON);
    }
}

export const tryLoginWithDetails = (userDetails) => {
    return async dispatch => {
        const user = await loginService.login(userDetails);
        window.localStorage.setItem(
            USER_LOCAL, JSON.stringify(user)
        );
        setUser(dispatch, user);
    }
}

const setUser = (dispatch, user) => {
    blogService.setToken(user.token);
    dispatch({ type:'LOGIN', user });
}

export const logout = () => {
    return async dispatch => {        
        window.localStorage.setItem(USER_LOCAL, null);
        dispatch({ type:'LOGOUT' });
    }
}

export const getAll = () => {
    return async dispatch => {
        const users = await userService.getAll();
        dispatch({type: 'INIT_USERS', users});
    }
}

const initialState = {
    users:[], 
    current:null
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            const user = {...state, current:action.user};
            console.log(user);
            return user;
        case 'LOGOUT':
            return {...state, current:null};
        case 'INIT_USERS':
            return {...state, users:action.users};
    }
    return state;
}

export default reducer;