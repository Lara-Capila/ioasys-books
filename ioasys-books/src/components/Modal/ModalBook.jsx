/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import * as Styled from './styles';

function ModalBook({ visible, onClose, data }) {
  console.log(data);

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      centered
      footer={[
        <Styled.ButtonClose key="submit" onClick={onClose}>
          Fechar
        </Styled.ButtonClose>,
      ]}
      width={800}
    >
      <Styled.Container>
        <Styled.ImageBookContainer imageUrl={data.imageUrl} />
        <Styled.DetailsContainer>
          <Styled.BookTitle>{data.title}</Styled.BookTitle>
          <Styled.ContainerAuthors>
            {data.authors.map((author) => (
              <Styled.Authors key={author}>{author}</Styled.Authors>
            ))}
          </Styled.ContainerAuthors>

          <Styled.InfosContainer>
            <Styled.SubTitle>INFORMAÇÕES</Styled.SubTitle>

            <Styled.InfoSpan>
              <Styled.Title>Páginas</Styled.Title>
              <Styled.Result>{data.pageCount} páginas</Styled.Result>
            </Styled.InfoSpan>

            <Styled.InfoSpan>
              <Styled.Title>Editora</Styled.Title>
              <Styled.Result>{data.publisher}</Styled.Result>
            </Styled.InfoSpan>

            <Styled.InfoSpan>
              <Styled.Title>Publicação</Styled.Title>
              <Styled.Result>{data.published}</Styled.Result>
            </Styled.InfoSpan>

            <Styled.InfoSpan>
              <Styled.Title>Idioma</Styled.Title>
              <Styled.Result>{data.language}</Styled.Result>
            </Styled.InfoSpan>

            <Styled.InfoSpan>
              <Styled.Title>Título Original</Styled.Title>
              <Styled.Result>{data.title}</Styled.Result>
            </Styled.InfoSpan>

            <Styled.InfoSpan>
              <Styled.Title>ISBN-10</Styled.Title>
              <Styled.Result>{data.isbn10}</Styled.Result>
            </Styled.InfoSpan>

            <Styled.InfoSpan>
              <Styled.Title>ISBN-10</Styled.Title>
              <Styled.Result>{data.isbn13}</Styled.Result>
            </Styled.InfoSpan>
          </Styled.InfosContainer>
          <Styled.SubTitle>RESENHA DA EDITORA</Styled.SubTitle>
          <Styled.DescriptionContainer>
            <Styled.QuotesIcon />
            <Styled.Description>{data.description}</Styled.Description>
          </Styled.DescriptionContainer>
        </Styled.DetailsContainer>
      </Styled.Container>
    </Modal>
  );
}

ModalBook.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ModalBook;
