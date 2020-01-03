import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

const SingleUserPage = ({ user, blogs }) => {
    if (!user){return null;}
    return (
        <>
            <h1 style={{ marginTop:10 }}>{user.name}</h1>
            <h3 style={{ marginTop:20 }}>Added Blogs</h3>
            <ListGroup>
                {blogs.map(x => <ListGroup.Item key={x.id}>{x.title}</ListGroup.Item>)}
            </ListGroup>
        </>
    );
};

const mapStateToProps = (state, { id }) => {

    const user = state.users.users.find(x => x.id === id);
    const blogs = user && user.blogs;

    return {
        user,
        blogs,
    };
};

export default connect(mapStateToProps)(SingleUserPage);