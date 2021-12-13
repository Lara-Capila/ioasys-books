import api from '../api';

const authLogin = async ({ email, password }) => {
  try {
    return api.post('auth/sign-in', {
      email,
      password,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default authLogin;
