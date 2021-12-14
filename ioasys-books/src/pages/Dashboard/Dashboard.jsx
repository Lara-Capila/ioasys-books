import React from 'react';

import * as Styled from './styles';
import Title from '../../components/Title/Title';
import BookCard from '../../components/BookCard/BookCard';
import getToken from '../../helpers/getToken';
import getBooks from '../../services/Books/getBooks';

function DashboardPage() {
  const [bookList, setBookList] = React.useState();

  const fetchBook = async () => {
    const token = getToken();
    try {
      const responseBooks = await getBooks({
        token,
        page: 1,
        category: 'biographies',
      });
      setBookList(responseBooks.data.data);
      console.log(responseBooks.data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchBook();
  }, []);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.LogoContainer>
          <Title />
        </Styled.LogoContainer>
      </Styled.Header>
      <Styled.BooksCard>
        {bookList?.map((book) => (
          <BookCard bookList={book} key={book.id} />
        ))}
      </Styled.BooksCard>
    </Styled.Container>
  );
}

export default DashboardPage;
