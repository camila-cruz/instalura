import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  background-color: rgba(0, 0, 0, 0.1);
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: auto;
  overflow: scroll;

  ${(props) => {
    if (props.isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }

    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

export default function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={() => {
        onClose();
      }}
    >
      {children}
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
