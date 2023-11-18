jest.mock('react-native-event-listeners', () => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
  

import render from '@testing-library/react-native';
import cleanup from '@testing-library/react-native';
import React from 'react';
import App from './App';
import { EventRegister } from 'react-native-event-listeners';



describe('componenet of App', () => {
    afterEach(cleanup);

    it('registers and unregisters an event listener', () => {
      const { unmount } = render(<App />);
      

      expect(EventRegister.addEventListener).toHaveBeenCalledWith('changeTheme', expect.any(Function));
      
      
      unmount();
      
      
      expect(EventRegister.removeEventListener).toHaveBeenCalledWith(expect.anything());
    });
});