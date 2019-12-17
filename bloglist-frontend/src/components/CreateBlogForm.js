import React from 'react';
import { connect } from 'react-redux';
import TextField from './TextField';
import { create as createBlog } from '../reducers/blogsReducer';
import { useTextField } from '../hooks/useTextField';
import { Form, Button } from 'react-bootstrap';

const CreateBlogForm = ({user, createBlog}) => {

    const title = useTextField();
    const author = useTextField();
    const url = useTextField();

    const handleSubmit = (e) => {
        e.preventDefault();
        createBlog({
            title:title.value,
            author:author.value,
            url:url.value,
            user
        });
        title.clear();
        author.clear();
        url.clear();
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h2>Create blog</h2>
                <TextField label={'Title'} {...title} />
                <TextField label={'Author'} {...author} />
                <TextField label={'URL'} {...url} />
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </>
    );
};

const mapStateToProps = (state) => {
    return{
        user: state.users.current
    }
}

export default connect(mapStateToProps, {createBlog})(CreateBlogForm);