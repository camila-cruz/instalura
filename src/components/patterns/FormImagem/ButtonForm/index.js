import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../commons/Button';
import Text from '../../../foundation/Text';

export function ButtonForm({ isSecondPage, children, onClick }) {
  return (
    <Button
      variant="primary.main"
      margin={isSecondPage ? '24px 0px 32px 0px' : '38px 0px 32px 0px'}
      onClick={onClick}
      style={{ width: '100%' }}
    >
      <Text
        variant="paragraph2bold"
        style={{ color: 'white' }}
      >
        {/* {(isSecondPage && 'Postar') || 'Avançar'} */}
        {children}
      </Text>
    </Button>
  );
}

ButtonForm.propTypes = {
  isSecondPage: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
