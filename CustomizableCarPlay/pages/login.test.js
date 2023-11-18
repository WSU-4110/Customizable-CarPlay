
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from './Login'; // Update the import path as needed

test('Renders Login component and handles user input', () => {
  const mockNavigation = { navigate: jest.fn() };
  const { getByPlaceholderText } = render(<Login navigation={mockNavigation} />);

  const emailInput = getByPlaceholderText('Email');
  const passwordInput = getByPlaceholderText('Password');

  fireEvent.changeText(emailInput, 'test@example.com');
  fireEvent.changeText(passwordInput, 'password123');

  expect(emailInput.props.value).toBe('test@example.com');
  expect(passwordInput.props.value).toBe('password123');
});
