import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, css } from 'styled-components';
import { motion } from 'framer-motion';
import { ModalCloseButton } from './ModalCloseButton';

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
  z-index: 100;
  
  transition: 0.3s;

  ${(props) => {
    if (props.isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
        overflow: hidden;
      `;
    }

    return css`
      opacity: 0;
      pointer-events: none;
      overflow: hidden;
    `;
  }}
`;

// Bloqueia o scroll da tela de fundo quando a modal está aberta
const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
    overflow-x: hidden;
  }
`;

export default function Modal({
  isOpen, onClose, children, animation, style,
}) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');

        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}

      <motion.div
        variants={animation}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{
          display: 'flex',
          flex: 1,
          ...style,
        }}
      >
        {/* Props do modal */}
        {children(() => ModalCloseButton(onClose), { 'data-modal-safe-area': 'true' })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.defaultProps = {
  animation: {
    open: {
      x: 0,
    },
    closed: {
      x: '100%',
    },
  },
  style: {},
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  animation: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};
