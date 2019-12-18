import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { Table } from 'react-bootstrap';

const UserList = ({users}) => {
    return (
        <Table><tbody>
            <tr><td></td><td>blogs created</td></tr>
            {users.map(x => (<tr key={x.id}><td><Link to={`/users/${x.id}`}>{x.name}</Link></td><td>{x.blogs.length}</td></tr>))}
        </tbody></Table>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps)(UserList);