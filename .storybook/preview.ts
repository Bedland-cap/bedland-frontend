import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

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
  }
}