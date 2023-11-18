const validation = require('./validation');
/*
describe('Phone Number Formatting', () => {
  test('Format valid phone number', () => {
    const phoneNumber = '1234567890';
    expect(validation.formatPhoneNumber(phoneNumber)).toBe('(123) 456-7890');
  });*/

describe('Email Validation', () => {
  test('Valid email format', () => {
    const validEmail = 'test@example.com';
    expect(validation.validateEmail(validEmail)).toBe(true);
  });
})