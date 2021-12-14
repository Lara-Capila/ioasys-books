import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';

function Paginacao({ teste }) {
  return (
    <Pagination
      responsive="true"
      defaultCurrent={1}
      total={26}
      pageSize={10}
      onChange={(page) => teste(page)}
    />
  );
}

Paginacao.propTypes = {
  teste: PropTypes.func.isRequired,
};

export default Paginacao;
