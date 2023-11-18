// Landing.test.js
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Landing from "./pages/landing";

// Mock the external modules
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.mock('react-native-event-listeners', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

describe('Landing', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Landing />);
    expect(getByText('Landing page - Customized Car Play')).toBeTruthy();
  });

  it('navigates when the button is pressed', () => {
    const { getByText } = render(<Landing />);
    const navigateButton = getByText('Start');
    fireEvent.press(navigateButton);
    // Assuming you have a navigate function mocked above
    expect(mockNavigateFunction).toHaveBeenCalledWith('Home');
  });

  it('toggles the mode when the switch is flipped', () => {
    const { getByTestId } = render(<Landing />);
    const modeSwitch = getByTestId('mode-switch'); // Make sure you add testID="mode-switch" to your Switch component
    fireEvent.valueChange(modeSwitch, true);
    expect(modeSwitch.props.value).toBe(true); // This may not work as expected since fireEvent doesn't actually change component state
  });
});
