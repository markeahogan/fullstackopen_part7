import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { like, remove, addComment } from '../reducers/blogsReducer';

import { useTextField } from '../hooks/useTextField';
import TextField from './TextField';
import { Form, Button } from 'react-bootstrap';

const SingleBlogPage = ({blog, deletable, like, remove, history, comments, addComment}) => {    

    const newComment = useTextField();
    
    if (!blog){ return null }

    const removeAndGoBack = () => {
        remove(blog);
        history.push('/');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const comment = newComment.value;
        if (!comment){return;}

        addComment(blog, comment);
        newComment.clear();
    }
    
    return (
        <>
            <h1>{blog.title}</h1>
            <Link to={blog.url}>{blog.url}</Link>
            <div>{blog.likes} likes <button onClick={()=>like(blog)}>like</button></div>
            <div>by {blog.author}</div>
            {deletable && <button onClick={removeAndGoBack}>remove</button>}
            <h4>comments</h4>
            <Form onSubmit={handleSubmit}>
                <TextField noWrapper {...newComment} />
                <Button type='submit'>add comment</Button>
            </Form>
            <ul>
                {comments.map((x, index) => <li key={index}>{x}</li>)}
            </ul>
        </>
    )
}

const mapStateToProps = (state, {id}) => {
    const blog = state.blogs.find(x => x.id === id);
    const deletable = state.users.current.name === (blog && blog.author);
    return {
        blog,
        deletable,
        comments:(blog && blog.comments) || []
    };
};

const mapDispatchToProps = {
    like,
    remove,
    addComment
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleBlogPage));