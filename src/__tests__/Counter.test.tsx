import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

describe('Counter Component', () => {
  test('renders with initial count', () => {
    render(<Counter />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('count is 0');
  });

  test('increments count when button is clicked', () => {
    render(<Counter />);
    const buttonElement = screen.getByRole('button');

    // Click the button
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 1');

    // Click the button again
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 2');
  });
});
