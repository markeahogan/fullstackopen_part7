import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../reducers/userReducer';

const UserDetails = ({ user, logOut }) => {
    return (
     <>
        <h1>blogs</h1>
        <h2>{user.name} logged in <button onClick={logout}>log out</button></h2>
     </>
    );
};

const mapStateToProps = state => {
    return {
        user:state.user.current
    };
}

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);