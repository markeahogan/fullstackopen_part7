import blogsService from '../services/blogs';

export const getAll = () => {
    return async dispatch => {
        const blogs = await blogsService.getAll();
        dispatch({ type:'INIT_BLOGS',blogs });
    };
};

export const create = (content) => {
    return async dispatch => {
        const result = await blogsService.create(content);
        dispatch({ type:'ADD',blog:result });
    };
};

export const like = (blog) => {
    return async dispatch => {
        const updatedBlog = { ...blog };
        updatedBlog.likes++;
        await blogsService.update(updatedBlog);
        dispatch({ type:'UPDATE',blog:updatedBlog });
    };
};

export const remove = (blog) => {
    return async dispatch => {
        await blogsService.remove(blog);
        const blogs = await blogsService.getAll();
        dispatch({ type:'INIT_BLOGS',blogs });
    };
};

export const addComment = (blog, comment) => {
    return async dispatch => {
        const updatedBlog = await blogsService.addComment(blog, comment);
        dispatch({ type:'UPDATE',blog:updatedBlog });
    };
};

const initialState = [];
const reducer = (state = initialState, action) => {
    switch(action.type){
    case 'INIT_BLOGS':
        return action.blogs;
    case 'ADD':
        return state.concat(action.blog);
    case 'UPDATE':
        return state.map(x => x.id === action.blog.id ? action.blog : x);
    }
    return state;
};

export default reducer;