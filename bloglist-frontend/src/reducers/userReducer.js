import loginService from '../services/loginService';
const USER_LOCAL = 'loggedBlogUser';

export const tryLoginWithLocalStorage = () => {
    return async dispatch => {
        const loggedUserJSON = window.localStorage.getItem(USER_LOCAL);
        if (loggedUserJSON) {
            setUser(dispatch, JSON.parse(loggedUserJSON));
        }
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

const initialState = '';
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return action.user;
        case 'LOGOUT':
            return null;
    }
    return state;
}

export default reducer;