const formatPhoneNumber = (input) => {
  const cleaned = ('' + input).replace(/\D/g, '');
  const tenDigits = cleaned.slice(0, 10);
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return tenDigits;
};