import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const UserList = ({users}) => {
    return (
        <table>
            <tr><td></td><td>blogs created</td></tr>
            {users.map(x => (
            <tr><td><Link to={`/users/${x.id}`}>x.name</Link></td><td>x.blogs</td></tr>
            ))}
        </table>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps)(UserList);