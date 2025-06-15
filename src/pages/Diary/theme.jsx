import { createTheme } from '@mui/material/styles';

export let theme = createTheme({
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 768,
      desktop: 1280,
    },
  },
});

theme = createTheme(theme, {
  summaryListMargin: {
    marginTop: '20px',
  },
  palette: {
    primary: {
      main: '#fc842d', //input focus color
      stroke: '#E0E0E0',
    },
    text: {
      primary: '#9B9FAA', // color of main text, lines, checkboxes
      secondary: '#9B9FAA', //placeholder color
    },
    button: {
      main: '#fc842d', //button color
      contrastText: '#ffffff', //text color
    },
  },
  typography: {
    fontFamily: ['Verdana', 'sans-serif'].join(','), //main font
    fontWeightBold: 700,
    title1: {
      //custom calculator title style
      fontSize: 18,
      lineHeight: 1.44,
      letterSpacing: 'normal',
      color: '#212121',
      [theme.breakpoints.up('mobile')]: {
        fontSize: 34,
        lineHeight: 1.2,
      },
    },
    title3: {
      //custom calculator subtitle style
      fontSize: 14,
      lineHeight: 1.2,
      letterSpacing: '0.04em',
      color: '#212121',
    },
    body1: {
      fontSize: 14, //main text size
      lineHeight: 1.2,
      letterSpacing: '0.04em',
    },
    button: {
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '0.04em',
    },
  },
});
