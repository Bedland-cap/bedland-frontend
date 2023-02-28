import '@testing-library/jest-dom';
import 'jest-styled-components';
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-testid' });
