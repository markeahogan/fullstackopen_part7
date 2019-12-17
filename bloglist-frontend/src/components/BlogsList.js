import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import Blog from './Blog';

const BlogsList = ({ blogs }) => {

    const sortedBlogs = [...blogs].sort((x, y) => y.likes - x.likes);

    return (
        <Table striped><tbody>
            {sortedBlogs.map(x => 
                <tr><td><Blog key={x.id} blog={x} /></td></tr>
            )}
        </tbody></Table>
    );
};

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(BlogsList);