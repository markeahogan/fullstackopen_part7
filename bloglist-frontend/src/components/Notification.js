import React from 'react';
import {connect} from 'react-redux';
import './Notification.css';
import PropTypes from 'prop-types';

const Notification = ({ message, style }) =>
{
    if (!message){ return null; }

    return (
        <div className={style}>{message}</div>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {...state.notification}
}

export default connect(mapStateToProps)(Notification);