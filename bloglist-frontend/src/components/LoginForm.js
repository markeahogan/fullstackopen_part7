import React from 'react';
import { connect } from 'react-redux';
import TextField from './TextField';
import { tryLoginWithDetails } from '../reducers/userReducer';
import { useTextField } from '../hooks/useTextField';

const LoginForm = ({ tryLoginWithDetails }) => {

    const username = useTextField();
    const password = useTextField();

    const handleSubmit = (e) => {
        e.preventDefault();
        tryLoginWithDetails({username:username.value, password:password.value});
        username.clear();
        password.clear();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>log in to application</h1>
            <TextField label={'username'} {...username} />
            <TextField label={'password'} {...password} />
            <input type="submit" value="login" />
        </form>
    );
};

const mapDispatchToProps = {
    tryLoginWithDetails
}

export default connect(null, mapDispatchToProps)(LoginForm);