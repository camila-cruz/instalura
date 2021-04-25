import React from 'react';
import styled from 'styled-components';
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline';

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  color: ${({ theme }) => theme.colors.tertiary.light.color};
  cursor: pointer;
`;

export function ModalCloseButton(closeModal) {
  return (
    <CloseButtonWrapper onClick={closeModal} role="button">
      <CloseIcon size={24} title="Botão para fechar a modal" />
    </CloseButtonWrapper>
  );
}
