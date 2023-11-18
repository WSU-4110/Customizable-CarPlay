// themeContext.test.js
import React from 'react';

import themeContext from '../components/themeContext'; 
import theme from '../components/theme'; 


const MockConsumerComponent = () => {
  const contextValue = React.useContext(themeContext);
  return <div data-testid="theme">{JSON.stringify(contextValue)}</div>;
};

describe('themeContext', () => {
  it('provides the initial theme values', () => {
    const { getByTestId } = render(
      <themeContext.Provider value={theme}>
        <MockConsumerComponent />
      </themeContext.Provider>
    );
    
    expect(getByTestId('theme').textContent).toBe(JSON.stringify(theme));
  });
});
