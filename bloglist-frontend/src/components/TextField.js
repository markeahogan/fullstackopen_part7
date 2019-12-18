import React from 'react';

const TextFieldNew = ({ label, value, onChange }) => {
    return (<div><label>{label} <input value={value} onChange={onChange} /></label></div>);
};

const TextField = ({ label, value, onChange, noWrapper, type }) => {
    if (noWrapper){
        return (<label style={{width:200}}>{label} <input type={type} value={value} onChange={onChange} /></label>);
    } else {        
        return (<div><label style={{width:200}}>{label} <input type={type} value={value} onChange={onChange} /></label></div>);
    }
};

export default TextField;