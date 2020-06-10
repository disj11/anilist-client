import { createMuiTheme } from '@material-ui/core/styles';
import {blueGrey, red} from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: blueGrey["50"],
        },
    },
});

export default theme;