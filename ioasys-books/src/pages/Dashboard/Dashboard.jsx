import React from 'react';

import { useHistory } from 'react-router-dom';
import * as Styled from './styles';
import Title from '../../components/Title/Title';
import BookCard from '../../components/BookCard/BookCard';
import getToken from '../../helpers/getToken';
import getBooks from '../../services/Books/getBooks';
import getUser from '../../helpers/getUser';
import ModalBook from '../../components/Modal/ModalBook';
import Paginacao from '../../components/Pagination/Pagination';

function DashboardPage() {
  const [bookList, setBookList] = React.useState();
  const [userData, setUserData] = React.useState();
  const [selectedBook, setSelectedBook] = React.useState();
  const [modalVisible, setModalVisible] = React.useState(false);

  const history = useHistory();

  const fetchBook = async (page) => {
    const token = getToken();
    try {
      const responseBooks = await getBooks({
        token,
        amount: 10,
        page,
      });
      setBookList(responseBooks.data.data);
    } catch (err) {
      throw new Error(err);
    }
  };

  const getUserData = async () => {
    const user = await getUser();
    setUserData(user);
  };

  const logoutUser = () => {
    try {
      localStorage.clear();
      history.push('/');
    } catch (err) {
      throw new Error(err);
    }
  };

  React.useEffect(() => {
    fetchBook(1);
    getUserData();
  }, []);

  const openModal = (id) => {
    const findSelectedBook = bookList.find((book) => book.id === id);
    setSelectedBook(findSelectedBook);
  };

  const handleClickBook = (id) => {
    openModal(id);
    setModalVisible(true);
  };

  return (
    <Styled.Container>
      {modalVisible && (
        <ModalBook
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          data={selectedBook}
        />
      )}
      <Styled.Header>
        <Styled.LogoContainer>
          <Title />
        </Styled.LogoContainer>
        <Styled.ContainerUser>
          <Styled.User>
            Bem Vind(x), <strong>{userData?.name}!</strong>
          </Styled.User>
          <Styled.LogoutIcon onClick={logoutUser} />
        </Styled.ContainerUser>
      </Styled.Header>
      <Styled.BooksCard>
        {bookList?.map((book) => (
          <BookCard
            bookList={book}
            key={book.id}
            onClick={() => handleClickBook(book.id)}
          />
        ))}
      </Styled.BooksCard>
      <Paginacao teste={(page) => fetchBook(page)} />
    </Styled.Container>
  );
}

export default DashboardPage;
