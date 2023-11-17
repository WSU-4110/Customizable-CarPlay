const validatePassword = (input) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return passwordRegex.test(input);
};

describe('Password Validation', () => {
  test('Valid password format', () => {
      const validPassword = 'Test@123';
      expect(validatePassword(validPassword)).toBe(true);
  });

  test('Invalid password format', () => {
      const invalidPassword = 'weakpassword';
      expect(validatePassword(invalidPassword)).toBe(false);
  });
});
