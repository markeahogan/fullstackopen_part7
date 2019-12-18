import React from 'react';
import { connect } from 'react-redux';
import TextField from './TextField';
import { tryLoginWithDetails } from '../reducers/userReducer';
import { useTextField } from '../hooks/useTextField';
import { Form, Button } from 'react-bootstrap';

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
        <Form onSubmit={handleSubmit}>
            <h1 style={{marginTop:40}}>Log in to application</h1>
            <TextField label={'username'} {...username} />
            <TextField label={'password'} type="password" {...password} />            
            <Button variant="primary" type="submit">
                    Login
            </Button>
        </Form>
    );
};

const mapDispatchToProps = {
    tryLoginWithDetails
}

export default connect(null, mapDispatchToProps)(LoginForm);