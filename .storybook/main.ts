import type { StorybookConfig } from '@storybook/react-webpack5';
import requireContext from 'require-context.macro';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    '@storybook/addon-interactions'
  ],
  "features": {
    interactionsDebugger: true,
  },
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  },
  "staticDirs": [
    "..\\public"
  ]
};
export default config;

import { configure } from '@storybook/react';

const req = require.context('**/*', true, /\.stories\.ts$/);
configure(req, module);