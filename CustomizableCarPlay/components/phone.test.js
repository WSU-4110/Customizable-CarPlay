const formatPhoneNumber = (input) => {
  const cleaned = ('' + input).replace(/\D/g, '');
  const tenDigits = cleaned.slice(0, 10);
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return tenDigits;
};


describe('Phone Number Formatting', () => {
  test('Format valid phone number', () => {
    const phoneNumber = '1234567890';
    expect(formatPhoneNumber(phoneNumber)).toBe('(123) 456-7890');
  });

  test('Format phone number with extra characters', () => {
    const phoneNumber = '123-456-7890'; // Contains hyphens
    expect(formatPhoneNumber(phoneNumber)).toBe('(123) 456-7890');
  });
});