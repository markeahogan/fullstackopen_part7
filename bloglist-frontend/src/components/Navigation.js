import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../reducers/userReducer';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Navigation = ({ user, logout }) => {

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Blogs</Nav.Link>
                    <Nav.Link href="/users">Users</Nav.Link>
                    <Nav.Link href="#" as="span">
                        {user
                            ? <em>{user.name} logged in</em>
                            : <Link to="/login">login</Link>
                        }
                    </Nav.Link>
                </Nav>
                <Nav className="justify-content-end" variant="pills">
                    <Nav.Item>
                        <Button onClick={logout}>Log Out</Button>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
};

const mapStateToProps = state => {
    return {
        user:state.users.current
    };
};

const mapDispatchToProps = {
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);