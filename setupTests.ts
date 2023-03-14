/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import 'jest-styled-components';
import 'whatwg-fetch';
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-testid' });
