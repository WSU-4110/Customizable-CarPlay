// Validation functions
const formatPhoneNumber = (input) => {
  const cleaned = ('' + input).replace(/\D/g, '');
  const tenDigits = cleaned.slice(0, 10);
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return tenDigits;
};

const validateEmail = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
};

const validatePassword = (input) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return passwordRegex.test(input);
};

const validateVehicleYear = (input) => {
  const yearRegex = /^\d{4}$/;
  return yearRegex.test(input);
};

const validateVehiclePlate = (input) => {
  const plateRegex = /^[A-Z0-9]{1,7}$/;
  const formattedInput = input.toUpperCase();
  return plateRegex.test(formattedInput);
};

const validateStateAbbreviation = (input) => {
  const stateRegex = /^[A-Za-z]{2}$/;
  return stateRegex.test(input.toUpperCase());
};

// Export all validation functions as an object
module.exports = {
  formatPhoneNumber,
  validateEmail,
  validatePassword,
  validateVehicleYear,
  validateVehiclePlate,
  validateStateAbbreviation,
};
