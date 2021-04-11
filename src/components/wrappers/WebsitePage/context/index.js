import { createContext } from 'react';

export const WebsitePageContext = createContext({
  toggleModalCadastro: () => {},
  getCMSContent: (cmsKey) => cmsKey,
});
