import { createTheme } from '@mui/material';
import darkScrollbar from '@mui/material/darkScrollbar';
import ScrollIcon from '../../images/icon/scrolls_text_box.svg';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#212121',
      white: '#FFFFFF',
      title: '#212121',
      sideBar: '#F0F1F3',
    },
    primary: {
      main: '#FC842D',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#FFF',
      contrastText: '#FC842D',
    },
    background: {
      paper: '#fff',
      hover: '#F0F1F3',
    },
    text: {
      primary: '#212121',
      secondary: '#9B9FAA',
      contrast: '#FC842D',
    },
    burger: {
      primary: '#264061',
    },
    userInfo: {
      primary: '#EFF1F3',
    },
    input: {
      primary: '#E0E0E0',
    },
  },
  borders: {
    primary: '1px solid',
    secondary: '2px solid',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  spaceForm: [13, 20, 40, 60, 160],
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: '#212121',
      white: '#FFFFFF',
      title: '#FC842D',
      sideBar: '#343434',
    },
    primary: {
      main: '#FC842D',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#212121',
      contrastText: '#FC842D',
    },
    background: {
      paper: '#222',
      hover: '#343434',
    },
    text: {
      primary: '#fff',
      secondary: '#9B9FAA',
      contrast: '#FFF',
    },
    burger: {
      primary: '#264061',
    },
    userInfo: {
      primary: '#EFF1F3',
    },
    input: {
      primary: '#E0E0E0',
    },
  },
  borders: {
    primary: '1px solid',
    secondary: '2px solid',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  spaceForm: [13, 20, 40, 60, 160],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: theme => ({
          '& input[type="number"]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
            height: '34px',
            width: '23px',
            cursor: 'pointer',
          },
          '@supports not (-moz-appearance: none)': {
            '& input[type="number"]': {
              backgroundImage: `url(${ScrollIcon})`,
              backgroundPosition: 'center right',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            },
          },
        }),
      },
    },
  },
});
