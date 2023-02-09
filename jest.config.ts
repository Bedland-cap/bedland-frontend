import type { Config } from 'jest';

const config: Config = {
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svg.ts',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  verbose: true,
  preset: 'ts-jest',
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/tests/**/*',
    // '!src/index.tsx',`
    '!src/reportWebVitals.ts',
    '!**/**/*.spec.js',
    '!**/**/*.mock.js',
    '!**/**/*.test.js',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  transform: { '^.+\\.jsx?$': 'babel-jest' },
};

export default config;
