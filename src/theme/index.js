import { typographyVariants } from './typographyVariants';

export const lightTheme = {
  colors: {
    background: {
      light: {
        color: '#FFFFFF',
      },
      main: {
        color: '#F2F2F2',
      },
    },
    borders: {
      main: {
        color: '#F1F1F1',
      },
    },
    primary: {
      main: {
        color: '#D7385E',
        contrastText: '#fff',
      },
    },
    secondary: {
      main: {
        color: '#FB7B6B',
        contrastText: '#fff',
      },
    },
    tertiary: {
      main: {
        color: '#070C0E',
        contrastText: '#fff',
      },
      light: {
        color: '#88989E',
        contrastText: '#fff',
      },
    },
    // Feedback colors
    error: {
      main: {
        color: '#dc3545',
        contrastText: '#fff',
      },
    },
    success: {
      main: {
        color: '#28a745',
        contrastText: '#fff',
      },
    },
    warning: {
      main: {
        color: '#F77228',
        constrastText: '',
      },
    },
  },
};

export const darkTheme = {
  colors: {
    background: {
      light: {
        color: '#030506',
      },
      main: {
        color: '#030506',
      },
    },
    borders: {
      main: {
        color: '#181F22',
      },
    },
    primary: {
      main: {
        color: '#F27895',
        contrastText: '#fff',
      },
    },
    secondary: {
      main: {
        color: '#FFA59A',
        contrastText: '#fff',
      },
    },
    tertiary: {
      main: {
        color: '#D4D4D4',
        contrastText: '#fff',
      },
      light: {
        color: '#FFFFFF',
        contrastText: '#000',
      },
    },
    // Feedback colors
    error: {
      main: {
        color: '#EB5C50',
        contrastText: '#fff',
      },
    },
    success: {
      main: {
        color: '#28a745',
        contrastText: '#fff',
      },
    },
    warning: {
      main: {
        color: '#FB9E6B',
        constrastText: '',
      },
    },
  },
};

const defaultTheme = {
  typographyVariants,
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  fontFamily: '\'Rubik\', sans-serif',
  borderRadius: '8px',
  transition: '200ms ease-in-out',
};

export const light = { ...lightTheme, ...defaultTheme };
export const dark = { ...darkTheme, ...defaultTheme };
