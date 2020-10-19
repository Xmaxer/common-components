import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import React from 'react';
import { IButtonProps } from '../components/Button/Button.types';

export const palette = {
    primary: {
        light: '#4C536B',
        main: '#2B2F3D',
        dark: '#111218',
    },
    secondary: {
        light: '#DDE1E4',
        main: '#b0bac2',
        dark: '#A4AFB6',
    },
    error: '#b20300',
    success: '#00b206',
    info: '#00b8ff',
};

const generatedPalette = createMuiTheme({
    palette: {
        primary: palette.primary,
        secondary: palette.secondary,
        error: {
            main: palette.error,
        },
        success: {
            main: palette.success,
        },
        info: {
            main: palette.info,
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

const theme = createMuiTheme({
    ...generatedPalette,
});

//TODO this is wrong, should maybe implement
function styled(Component: React.FC) {
    return React.forwardRef<unknown, IButtonProps>(function WithCustomStyles(
        props
    ) {
        return (
            <ThemeProvider theme={theme}>
                <Component {...props} />
            </ThemeProvider>
        );
    });
}

export default styled;
