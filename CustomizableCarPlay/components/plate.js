const validateVehiclePlate = (input) => {
  const plateRegex = /^[A-Z0-9]{1,7}$/;
  const formattedInput = input.toUpperCase(); // Convert input to uppercase
  return plateRegex.test(formattedInput);
};

module.exports = validateVehiclePlate;
