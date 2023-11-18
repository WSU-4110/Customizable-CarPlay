const validateVehicleYear = (input) => {
  const yearRegex = /^\d{4}$/; // Regex for exactly four digits
  return yearRegex.test(input);
};