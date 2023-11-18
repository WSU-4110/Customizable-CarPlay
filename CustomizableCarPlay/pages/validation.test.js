const validation = require('./validation');

describe('Phone Number Formatting', () => {
  test('Format valid phone number', () => {
    const phoneNumber = '1234567890';
    expect(validation.formatPhoneNumber(phoneNumber)).toBe('(123) 456-7890');
  });
});

describe('Email Validation', () => {
  test('Valid email format', () => {
    const validEmail = 'test@example.com';
    expect(validation.validateEmail(validEmail)).toBe(true);
  });
});

describe('Password Validation', () => {
  test('Invalid password format', () => {
    const invalidPassword = 'weakpassword';
    expect(validation.validatePassword(invalidPassword)).toBe(false);
  });
});

describe('Vehicle Year Validation', () => {
  test('Valid vehicle year format', () => {
    const validYear = '2023';
    expect(validation.validateVehicleYear(validYear)).toBe(true);
  });
});

describe('Vehicle Plate Validation', () => {
  test('Invalid vehicle plate format', () => {
    const invalidPlate = 'AB@123';
    expect(validation.validateVehiclePlate(invalidPlate)).toBe(false);
  });
});

describe('State Abbreviation Validation', () => {
  test('Valid state abbreviation format', () => {
    const validState = 'NY';
    expect(validation.validateStateAbbreviation(validState)).toBe(true);
  });
});
