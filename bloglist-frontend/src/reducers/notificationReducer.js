const initialState = '';

export const setNotification = (value, durationInSeconds) => {
    return async dispatch => {
        dispatch({ type:'SET_NOTIFICATION', notification:value });
        setTimeout(() => dispatch({ type:'CLEAR' }), durationInSeconds * 1000);
    };
};

export const clearNotification = () => {
    return { type:'CLEAR' };
};

const reducer = (state = initialState, action) => {
    switch(action.type){
    case 'SET_NOTIFICATION':
        return action.notification;
    case 'CLEAR':
        return '';
    }
    return state;
};

export default reducer;