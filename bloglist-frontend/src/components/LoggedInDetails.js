import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../reducers/userReducer';

const LoggedInDetails = ({ user, logout }) => {
    return (
     <>
        <h1>blogs</h1>
        <h2>{user.name} logged in <button onClick={logout}>log out</button></h2>
     </>
    );
};

const mapStateToProps = state => {
    return {
        user:state.users.current
    };
}

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInDetails);