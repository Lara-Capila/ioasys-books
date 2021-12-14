const getUser = async () => {
  try {
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    return user;
  } catch (err) {
    throw new Error(err);
  }
};

export default getUser;
