import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {logout} from '../reducers/userReducer';
import { returnStatement } from '@babel/types';

const Navigation = ({user, logout}) => {
return(
        <>
            <Link to='/'>blogs</Link>
            <Link to='/users'>users</Link>            
            {user.name} logged in <button onClick={logout}>log out</button>
        </>
    );
}

const mapStateToProps = state => {
    return {
        user:state.users.current
    };
}

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);