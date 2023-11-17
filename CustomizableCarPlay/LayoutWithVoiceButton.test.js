import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';
import LayoutWithVoiceButton from './LayoutWithVoiceButton';

jest.mock('expo-speech', () => ({
  speak: jest.fn(),
}));

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe('LayoutWithVoiceButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('toggles showOptions state on press', async () => {
    const { getByTestId, queryByTestId } = render(<LayoutWithVoiceButton />);
    const voiceButton = getByTestId('voiceButton');

    fireEvent.press(voiceButton);
    await waitFor(() => {
      expect(queryByTestId('optionsContainer')).toBeTruthy();
    });

    fireEvent.press(voiceButton);
    await waitFor(() => {
      expect(queryByTestId('optionsContainer')).toBeFalsy();
    });
  });

  // Test for Spotify button
  it('calls Speech.speak with "Opening Spotify" when Spotify button is pressed', async () => {
    const { getByTestId } = render(<LayoutWithVoiceButton />);
    fireEvent.press(getByTestId('voiceButton')); // First toggle the showOptions

    await waitFor(() => {
      const spotifyButton = getByTestId('spotifyButton');
      fireEvent.press(spotifyButton);
      expect(Speech.speak).toHaveBeenCalledWith('Opening Spotify');
    });
  });

  // Test for Maps button
  it('calls Speech.speak with "Opening Google Maps" when Maps button is pressed', async () => {
    const { getByTestId } = render(<LayoutWithVoiceButton />);
    fireEvent.press(getByTestId('voiceButton')); // First toggle the showOptions

    await waitFor(() => {
      const mapsButton = getByTestId('mapsButton');
      fireEvent.press(mapsButton);
      expect(Speech.speak).toHaveBeenCalledWith('Opening Google Maps');
    });
  });

  // Test for Home button
  it('navigates to Home screen when Home button is pressed', async () => {
    const { getByTestId } = render(<LayoutWithVoiceButton />);
    fireEvent.press(getByTestId('voiceButton')); // First toggle the showOptions

    await waitFor(() => {
      const homeButton = getByTestId('homeButton');
      fireEvent.press(homeButton);
      expect(useNavigation().navigate).toHaveBeenCalledWith('Home');
    });
  });
});
