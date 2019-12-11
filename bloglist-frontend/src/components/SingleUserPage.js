import React from 'react';
import { connect } from 'readt-redux';
import User from './User';

const SingleUserPage = ({users, blogs, id}) => {

    const user = users.find(x => x.id === id);
    const usersBlogs = blogs.filter(x => x.user.id === id);

    return (<User user={user} blogs={usersBlogs} />);
};

const mstp = state => {
    return {
        users:state.users,
        blogs:state.blogs
    }
}

export default connect(mstp)(SingleUserPage);