import React from 'react';
import { connect } from 'react-redux';
import User from './User';

const SingleUserPage = ({user, blogs}) => {
    if (!user){return null;}
    return (<User user={user} blogs={blogs} />);
};

const mapStateToProps = (state, {id}) => {

    const user = state.users.find(x => x.id === id);
    const blogs = state.blogs.filter(x => x.user.id === id);

    return {
        user,
        blogs,
    }
}

export default connect(mapStateToProps)(SingleUserPage);