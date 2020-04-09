// src/styleguide/Wrapper.js
import React from 'react'
import usePortal from '../hooks/usePortal';

function Wrapper(props) {
    const portalTarget = usePortal('portal-root');
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, portalTarget)
    })
}

export default Wrapper;
