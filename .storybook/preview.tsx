import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import initialTheme from '../src/theme/initialTheme';
import GlobalStyle from '../src/theme/globalStyles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
      expanded: true,
      backgrounds: {
        default: 'dark',
      }
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  layout: 'centered',
  html: {
    root: '#storybook-root',
    highlighter: {
      showLineNumbers: false,
      wrapLines: true,
    },
    removeComments: /^\s*remove me\s*$/, 
    removeEmptyComments: true, 
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: "strict",
    },
  }
};

const decorators = [
  (Story) => (
    <ThemeProvider theme={initialTheme}>
          <GlobalStyle />
            {Story()}
    </ThemeProvider>
  ),
]
