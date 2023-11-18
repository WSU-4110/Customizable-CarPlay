const validation = require('./validation');

describe('Phone Number Formatting', () => {
  test('Format valid phone number', () => {
    const phoneNumber = '1234567890';
    expect(validation.formatPhoneNumber(phoneNumber)).toBe('(123) 456-7890');
  });

  test('Format phone number with extra characters', () => {
    const phoneNumber = '123-456-7890'; // Contains hyphens
    expect(validation.formatPhoneNumber(phoneNumber)).toBe('(123) 456-7890');
  });
});

describe('Email Validation', () => {
  test('Valid email format', () => {
    const validEmail = 'test@example.com';
    expect(validation.validateEmail(validEmail)).toBe(true);
  });

  test('Invalid email format - missing "@" symbol', () => {
    const invalidEmail = 'testexample.com';
    expect(validation.validateEmail(invalidEmail)).toBe(false);
  });
});

describe('Password Validation', () => {
  test('Valid password format', () => {
    const validPassword = 'Test@123';
    expect(validation.validatePassword(validPassword)).toBe(true);
  });

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

  test('Invalid vehicle year format: Too few digits', () => {
    const invalidYear = '123';
    expect(validation.validateVehicleYear(invalidYear)).toBe(false);
  });
});

describe('Vehicle Plate Validation', () => {
  test('Valid vehicle plate format', () => {
    const validPlate = 'AB123CD';
    expect(validation.validateVehiclePlate(validPlate)).toBe(true);
  });

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

  test('Invalid state abbreviation format', () => {
    const invalidState = 'California'; // Longer than 2 characters
    expect(validation.validateStateAbbreviation(invalidState)).toBe(false);
  });
});
