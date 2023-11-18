const validateStateAbbreviation = (input) => {
  const stateRegex = /^[A-Za-z]{2}$/;
  return stateRegex.test(input.toUpperCase());
};
