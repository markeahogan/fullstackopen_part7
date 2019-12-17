import React from 'react';

const TextFieldOld = ({ label, value, onChange }) => {
    return (<div><label>{label} <input value={value} onChange={onChange} /></label></div>);
};

const TextField = ({ label, value, onChange, noWrapper }) => {

    const LabelElem = ({children}) => {
        if (label){
            return <label>{label} {children}</label>;
        }else{
            return <>{children}</>;
        }
    }
    const WrapperElem = ({children}) => {
        if (!noWrapper){
            return <div>{children}</div>;
        }else{
            return <>{children}</>;
        }
    }

    return (
        <WrapperElem>
            <LabelElem>
                <input value={value} onChange={onChange} />
            </LabelElem>
        </WrapperElem>
        );
};

export default TextField;