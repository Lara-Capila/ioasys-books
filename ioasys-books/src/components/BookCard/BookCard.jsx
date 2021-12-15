import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

function BookCard({ bookList, onClick }) {
  return (
    <Styled.Container onClick={onClick}>
      <Styled.BookContainer>
        <Styled.BookImage imageUrl={bookList.imageUrl} />
        <Styled.BookDetails>
          <Styled.BookTitle>{bookList.title}</Styled.BookTitle>
          {bookList.authors.map((author) => (
            <Styled.BookAuthor key={author}>{author}</Styled.BookAuthor>
          ))}
          <Styled.BookInfos>
            <Styled.BookSpanInfo>
              {bookList.pageCount} páginas
            </Styled.BookSpanInfo>
            <Styled.BookSpanInfo>
              Editora {bookList.publisher}
            </Styled.BookSpanInfo>
            <Styled.BookSpanInfo>
              Publicado em {bookList.published}
            </Styled.BookSpanInfo>
          </Styled.BookInfos>
        </Styled.BookDetails>
      </Styled.BookContainer>
    </Styled.Container>
  );
}

BookCard.propTypes = {
  bookList: PropTypes.objectOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BookCard;
