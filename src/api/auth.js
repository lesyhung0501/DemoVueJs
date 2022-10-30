import axiosAPI from ".";

export const signUpAPI = (userRegister) => {
  return axiosAPI.post("/users/register", userRegister);
};

export const signInAPI = (userLogin) => {
  return axiosAPI.post("/users/login", userLogin);
};
