import React from 'react';
import {connect} from 'react-redux';

const UserList = ({users}) => {
    return (
        <table>
            <tr><td></td><td>blogs created</td></tr>
            (users.map(x => (
            <tr><td>x.name</td><td>x.blogs</td></tr>
            )))
        </table>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserList);