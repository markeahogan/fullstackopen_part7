import React from 'react';
import { connect } from 'react-redux';

const SingleUserPage = ({user, blogs}) => {
    if (!user){return null;}
    return (
        <>
            <h1>{user.name}</h1>
            <h2>Added Blogs</h2>
            <ul>
                {blogs.map(x => <li>{x.title}</li>)}
            </ul>
        </>
    );
};

const mapStateToProps = (state, {id}) => {

    const user = state.users.users.find(x => x.id === id);
    const blogs = user && user.blogs;

    return {
        user,
        blogs,
    }
}

export default connect(mapStateToProps)(SingleUserPage);