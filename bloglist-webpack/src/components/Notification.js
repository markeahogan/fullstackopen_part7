import React from 'react';
import { connect } from 'react-redux';
import './Notification.css';

const Notification = ({ message, style }) =>
{
    if (!message){ return null; }

    return (
        <div className={style}>{message}</div>
    );
};

const mapStateToProps = (state) => {
    return { ...state.notification };
};

export default connect(mapStateToProps)(Notification);