import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import React from 'react';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
    interface PaletteColor {
        lightest: string;
        lighter: string;
        darker: string;
        darkest: string;
    }

    interface SimplePaletteColorOptions {
        lightest?: string;
        lighter?: string;
        darker?: string;
        darkest?: string;
    }
}

export const palette: PaletteOptions = {
    primary: {
        lightest: '#fff2ce',
        lighter: '#ffecb7',
        light: '#ffe36f',
        main: '#FAB900',
        contrastText: '#565656',
    },
    secondary: {
        lightest: '#ffffff',
        lighter: '#f6f6f6',
        light: '#DDE1E4',
        main: '#b0bac2',
        dark: '#A4AFB6',
        darker: '#afafaf',
        darkest: '#565656',
        contrastText: '#565656',
    },
    error: {
        lighter: '#ffe3e3',
        light: '#f8ced0',
        main: '#f75c5c',
        dark: '#951e1e',
    },
    success: {
        light: '#d3ffba',
        main: '#b7e49d',
        dark: '#457928',
    },
    info: {
        light: '#7cebff',
        main: '#37b1c7',
    },
};

const generatedPalette = createMuiTheme({
    palette: {
        primary: palette.primary,
        secondary: palette.secondary,
        error: palette.error,
        success: palette.success,
        info: palette.info,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

const theme = createMuiTheme({
    ...generatedPalette,
});

/**
 * This HOC returns the component itself wrapped in a theme.
 * The exported component doesn't work well with StoryBook, however there is a workaround as noted in linked Github issue.
 * @see https://github.com/storybookjs/storybook/issues/9023
 * @param Component The component that is exported
 */
export function styled<P>(
    Component: React.ComponentType<P>
): ({ ...props }: P) => React.ReactElement<P> {
    const NewComponent = ({ ...props }: P) => {
        return (
            <ThemeProvider theme={theme}>
                <Component {...props} />
            </ThemeProvider>
        );
    };
    NewComponent.displayName = Component.displayName;
    return NewComponent;
}
