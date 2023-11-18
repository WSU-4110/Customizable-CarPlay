const validateVehicleYear = (input) => {
  const yearRegex = /^\d{4}$/; // Regex for exactly four digits
  return yearRegex.test(input);
};
describe('Vehicle Year Validation', () => {
  test('Valid vehicle year format', () => {
    const validYear = '2023';
    expect(validateVehicleYear(validYear)).toBe(true);
  });

  test('Invalid vehicle year format: Too few digits', () => {
    const invalidYear = '123';
    expect(validateVehicleYear(invalidYear)).toBe(false);
  });
});