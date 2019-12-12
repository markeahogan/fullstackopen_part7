import React from 'react';
//todo connect and get user and blogs by nhhuuggyujn 

const User = ({user, blogs}) => {
    return (
    <>
    <h1>{user.name}</h1>
    <li>
        {blogs.map(x => <ul>{x.title}</ul>)}
    </li>
    </>
    );
}

export default User;