/**
 * @jest-environment ./src/jestTestEnv
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/settings/i);
  expect(linkElement).toBeInTheDocument();
});
