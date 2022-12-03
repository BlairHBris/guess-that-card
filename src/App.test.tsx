import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe ("home screen display", () => {
  
  it ('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText(/Guess That Card/i)).toBeInTheDocument();
})
})

