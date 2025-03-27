export const validateName = (name) => {
  if (!name) return 'Name is required!';
  if (name.length < 3) return 'Name must be at least 3 characters long!';
  if (!/^[a-zA-Z\s]+$/.test(name))
    return 'Name can only contain letters and spaces!';
  return '';
};

export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) return 'Email is required!';
  if (!emailRegex.test(email)) return 'Invalid email format!';
  return '';
};

export const validateMobile = (mobile) => {
  const mobileRegex = /^[6-9]\d{9}$/;
  if (!mobile) return 'Mobile number is required!';
  if (!mobileRegex.test(mobile)) return 'Invalid mobile number!';
  return '';
};

export const validatePassword = (password) => {
  if (password.length == 0) return 'Password fields cannot be empty!';
  if (password.length < 6)
    return 'Password must be at least 6 characters long!';
  // if (password !== confirmPassword) return "Passwords do not match!";
  return '';
};

export const validatePasswords = (password, confirmPassword) => {
  if (!password || !confirmPassword) return 'Password fields cannot be empty!';
  if (password.length < 6)
    return 'Password must be at least 6 characters long!';
  if (password !== confirmPassword) return 'Passwords do not match!';
  return '';
};
