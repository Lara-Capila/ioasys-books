import api from '../api';

const getBooks = async ({ token, page, amount, category }) => {
  try {
    return api.get('/books', {
      headers: {
        Authorization: `Baerer ${token}`,
      },
      params: {
        page,
        amount,
        category,
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

export default getBooks;
