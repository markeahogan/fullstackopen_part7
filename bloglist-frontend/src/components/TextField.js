import React from 'react';

const TextFieldNew = ({ label, value, onChange }) => {
    return (<div><label>{label} <input value={value} onChange={onChange} /></label></div>);
};

const TextField = ({ label, value, onChange, noWrapper }) => {
    if (noWrapper){
        return (<label>{label} <input value={value} onChange={onChange} /></label>);
    } else {        
        return (<div><label>{label} <input value={value} onChange={onChange} /></label></div>);
    }
};

export default TextField;