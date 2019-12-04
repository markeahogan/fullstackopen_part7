import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';
import { getAll } from '../reducers/blogsReducer';

const BlogsList = ({ blogs, getAll }) => {

    useEffect(() => {
        getAll();
    }, []);

    const sortedBlogs = [...blogs].sort((x, y) => y.likes - x.likes);

    return (
     <>
        {sortedBlogs.map(x => 
            <Blog key={x.id} blog={x} />
        )}
     </>
    );
};

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

const mapDispatchToProps = {
    getAll
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogsList);