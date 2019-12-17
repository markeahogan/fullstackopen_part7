import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {logout} from '../reducers/userReducer';
import {Navbar, Nav} from 'react-bootstrap';

const Navigation = ({user, logout}) => {

    const padding = {
        paddingTop: 10,
        paddingLeft: 2
    };

return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#" as="span">
        <Link style={padding} to="/">Blogs</Link>
      </Nav.Link>
      <Nav.Link href="#" as="span">
        <Link style={padding} to="/users">Users</Link>
      </Nav.Link>
      <Nav.Link href="#" as="span">
        {user
          ? <em>{user.name} logged in</em>
          : <Link to="/login">login</Link>
        }
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>)
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