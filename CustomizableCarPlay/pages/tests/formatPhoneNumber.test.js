// Assuming you're using Jest for testing

const formatPhoneNumber = (input) => {
  const cleaned = ('' + input).replace(/\D/g, '');
  const tenDigits = cleaned.slice(0, 10);
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return tenDigits;
};

describe('formatPhoneNumber', () => {
  it('formats phone numbers correctly', () => {
    const phoneNumber = '1234567890';
    const formatted = formatPhoneNumber(phoneNumber);
    expect(formatted).toEqual('(123) 456-7890');
  });

  it('returns ten digits for invalid numbers', () => {
    const invalidPhoneNumber = 'abc123def456';
    const formatted = formatPhoneNumber(invalidPhoneNumber);
    expect(formatted).toEqual('123456');
  });
});
