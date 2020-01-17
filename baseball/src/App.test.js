import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);

})

test('Ball header is found', () => {
  const { getByTestId } = render(<App />);
    getByTestId(/ball/i);
  });

test('Strike header is found', () => {
  const { getByTestId } = render (<App />);
  getByTestId(/strike/i);
})

test('Out header is found', () => {
  const { getByTestId } = render (<App />);
  getByTestId(/out/i);
})

