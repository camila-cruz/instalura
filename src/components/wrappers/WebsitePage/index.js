/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { useTheme } from 'styled-components';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import { Box } from '../../foundation/layout/Box';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../commons/SEO';
import { AuthContext } from './context/auth';
import { WebsitePageContext } from './context';

export { WebsitePageContext } from './context';

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
  messages,
}) {
  const [isModalOpen, setModal] = useState(false);
  const theme = useTheme();
  const { hasActiveSession } = React.useContext(AuthContext);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModal(!isModalOpen);
        },
        getCMSContent: (cmsKey) => get(messages, cmsKey),
      }}
    >
      <SEO {...seoProps} />

      <Box
        display="flex" // Deixa o footer na parte de baixo da tela
        flexDirection="column"
        flex="1"
        backgroundColor={theme.colors.background.light.color}
        {...pageBoxProps}
      >

        <Modal isOpen={isModalOpen} onClose={() => setModal(false)}>
          {(propsDoModal) => (
            <FormCadastro propsDoModal={propsDoModal} />
          )}
        </Modal>

        {menuProps.display && (
          <Menu
            onCadastrarClick={() => setModal(true)}
            hasActiveSession={hasActiveSession}
          />
        )}
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
  messages: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
    flexWrap: PropTypes.string,
    justifyContent: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
};
