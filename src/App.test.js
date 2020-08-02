import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';

test('renders page header', () => {
  const { getByText } = render(<App />);
  const pageHeader = getByText("NBA Scoreboard - 08/01/20");
  expect(pageHeader).toBeInTheDocument();
});
