const validate = (email, password, name) => {
  const isValidEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
      password
    );

  const isNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);

  if (!isValidEmail) {
    return "Email is not valid";
  }

  if (!isValidPassword) {
    return "Password is not valid";
  }

  if (!isNameValid) {
    return "Name is not valid";
  }

  return null;
};

export default validate;
