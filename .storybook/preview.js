import React from 'react';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme} from '../src/theme';

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
};

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <Story />
            <GlobalStyle />
        </ThemeProvider>
    ),
];
