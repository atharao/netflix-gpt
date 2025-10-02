const useValidate = (email, password) => {
  const isValidEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
      password
    );

  if (!isValidEmail) {
    return "Email is not valid";
  }

  if (!isValidPassword) {
    return "Password is not valid";
  }

  return null;
};

export default useValidate;
