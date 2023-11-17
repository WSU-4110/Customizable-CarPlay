const validateEmail = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
};

describe('Email Validation', () => {
  test('Valid email format', () => {
    const validEmail = 'test@example.com';
    expect(validateEmail(validEmail)).toBe(true);
  });

  test('Invalid email format - missing "@" symbol', () => {
    const invalidEmail = 'testexample.com';
    expect(validateEmail(invalidEmail)).toBe(false);
  });
});
