import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';

const BlogsList = ({ blogs }) => {

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

export default connect(mapStateToProps)(BlogsList);