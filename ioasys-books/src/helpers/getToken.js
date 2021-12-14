const getToken = async () => {
  try {
    const token = localStorage.getItem('access_token');
    return token;
  } catch (err) {
    throw new Error(err);
  }
};

export default getToken;
