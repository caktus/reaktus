import React from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence } from 'framer-motion';
// import usePortal from '../../../hooks/usePortal';
import { StyledModal, StyledShade } from './Modal.styled';

const Modal = ({ isVisible, closeModal, children, ...props }) => {
    return ReactDOM.createPortal(
        <AnimatePresence>
            {isVisible && [
                <StyledShade
                    key="shade"
                    onClick={closeModal}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />,
                <StyledModal
                    {...props}
                    key="modal"
                    transition={{
                        duration: 0.25,
                        ease: 'linear'
                    }}
                    initial={{ opacity: 0, scale: 0.9, x: '-50%', y: '-50%' }}
                    animate={{ opacity: [0, 1, 1], scale: [0.9, 0.95, 1], x: '-50%', y: '-50%' }}
                    exit={{ opacity: 0, scale: 0.9, x: '-50%', y: '-50%' }}
                >
                    {children}
                </StyledModal>
            ]}
        </AnimatePresence>,
        document.getElementById('portal-root')
    );
};

export default Modal;
