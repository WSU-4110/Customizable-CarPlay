const validateVehiclePlate = (input) => {
  const plateRegex = /^[A-Z0-9]{1,7}$/;
  const formattedInput = input.toUpperCase(); // Convert input to uppercase
  return plateRegex.test(formattedInput);
};

module.exports = validateVehiclePlate;


describe('Vehicle Plate Validation', () => {
  test('Valid vehicle plate format', () => {
    const validPlate = 'AB123CD';
    expect(validateVehiclePlate(validPlate)).toBe(true);
  });

  test('Invalid vehicle plate format', () => {
    const invalidPlate = 'AB@123';
    expect(validateVehiclePlate(invalidPlate)).toBe(false);
  });
});