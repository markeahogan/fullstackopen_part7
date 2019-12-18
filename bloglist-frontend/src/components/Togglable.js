import React, { useState, useImperativeHandle } from 'react';
import { Button } from 'react-bootstrap';

const Togglable = React.forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false);

    const padding = {margin:"20px 0px"};
    const show = { display: '', ...padding };
    const hide = { display: 'none', ...padding };

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    useImperativeHandle(ref, () => {
        return {
            toggleVisibility
        };
    });

    return (
    <>
      <div style={visible ? hide : show}>
          <Button onClick={() => setVisible(true)}>{props.buttonLabel}</Button>
      </div>
      <div style={visible ? show : hide}>
          {props.children}
          <div style={{height:4}}></div>
          <Button variant="outline-primary" onClick={() => setVisible(false)}>Cancel</Button>
      </div>
    </>
    );
});

export default Togglable;