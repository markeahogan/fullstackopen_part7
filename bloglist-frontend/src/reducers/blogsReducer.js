import blogsService from '../services/blogs';

const initialState = [];

export const getAll = () => {
    return async dispatch => {
        const blogs = await blogService.getAll();
        dispatch({type:'INIT_BLOGS',blogs});
    }
}

export const create = (content) => {
    return async dispatch => {
        const result = await blogsService.create(content);
        dispatch({type:'ADD',blog:result});
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INIT_BLOGS':
            return action.blogs;
        case 'ADD':
            return state.concat(action.blog);
    }
    return state;
}

export default reducer;