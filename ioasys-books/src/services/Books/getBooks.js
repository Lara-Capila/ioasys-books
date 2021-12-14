import api from '../api';

const getBooks = async ({ token, page, amount }) => {
  console.log(page, amount);
  try {
    return api.get('/books', {
      headers: {
        Authorization: `Baerer ${token}`,
      },
      params: {
        page: `${page} || 1`,
        amount: `${amount} || 10`,
        category: 'biographies',
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

export default getBooks;
