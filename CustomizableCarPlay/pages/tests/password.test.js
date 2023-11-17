

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
