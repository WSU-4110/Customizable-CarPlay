// jest.setup.js
jest.mock('expo-speech', () => {
  return {
    speak: jest.fn(),
  };
});
