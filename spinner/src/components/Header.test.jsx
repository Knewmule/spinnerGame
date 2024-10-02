import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from 'Header';

test('renders header', () => {
  render(Header); 
  // getby tex has a type error
  const header = screen.getByText(/Fuck Spinner/i);
  expect(header).toBeInTheDocument();
});
