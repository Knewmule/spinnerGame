import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header', () => {
  render(<Header />);
  const header = screen.getByText(/Fuck Spinner/i);
  expect(header).toBeInTheDocument();
});
