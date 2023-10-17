// validation.js
//note for commit
export function isValidEmail(email) {
  // Add your email validation logic here
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return emailRegex.test(email);
}

export function isValidPassword(password) {
  // Add your password validation logic here
  // For example, check if the password is at least 8 characters long
  return password.length >= 8;
}
