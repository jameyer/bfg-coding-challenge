import { createTheme } from '@material-ui/core';

const darkGreen = '#043b1b';
const lightGreen = '#90b47d';

export default createTheme({
    palette: {
        common: {
            darkGreen: `${darkGreen}`,
            orange: `${lightGreen}`,
        },
        primary: {
            main: `${darkGreen}`,
        },
        secondary: {
            main: `${lightGreen}`,
        },
    },
    typography: {
        tab: {
            fontFamily: 'Lato',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem',
        },
        h4: {
            fontFamily: 'Lato',
            fontWeight: 400,
            fontSize: '1.5rem',
            marginBottom: '2rem',
        },
        body1: {
            fontFamily: 'Roboto',
            fontSize: '1rem',
        },
    },
});
