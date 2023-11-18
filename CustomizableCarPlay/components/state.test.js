const validateStateAbbreviation = (input) => {
  const stateRegex = /^[A-Za-z]{2}$/;
  return stateRegex.test(input.toUpperCase());
};

describe('State Abbreviation Validation', () => {
  test('Valid state abbreviation format', () => {
    const validState = 'NY';
    expect(validateStateAbbreviation(validState)).toBe(true);
  });

  test('Invalid state abbreviation format', () => {
    const invalidState = 'California'; // Longer than 2 characters
    expect(validateStateAbbreviation(invalidState)).toBe(false);
  });
});