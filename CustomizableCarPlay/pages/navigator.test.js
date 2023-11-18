import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';


jest.mock('@react-navigation/native');
jest.mock('@react-navigation/stack');

import AppNavigator from './AppNavigator'; 

describe('AppNavigator', () => {
  it('should have the Register screen as the initial route', () => {

    const { getByTestId } = render(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

  
    expect(getByTestId('register-screen')).toBeTruthy();
  });


});
