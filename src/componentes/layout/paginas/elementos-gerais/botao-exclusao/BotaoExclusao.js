import React from 'react';
import * as FaIcon from 'react-icons/fa';
import ExclusaoPetApi from '../../../../api/ExclusaoPetApi';
import ExclusaoClienteApi from '../../../../api/ExclusaoClienteApi';

function BotaoExclusao({ modulo, codigo }) {
  let api;

  switch (modulo) {
    case 'pet': 
      api = ExclusaoPetApi;
      break;

    case 'cliente':
      api = ExclusaoClienteApi;
      break;

    default:
      api = () => {};
      break;
  }

  const { excluir, loading, error } = api();

  const handleClick = () => {
    excluir(codigo);
  };

  return (
    <button onClick={handleClick} disabled={loading}>
      <i className="icone-excluir">
        <FaIcon.FaTrash />
      </i>
      {loading && <span>Excluindo...</span>}
      {error && <div className="erro-exclusao">{error}</div>}
    </button>
  );
}

export default BotaoExclusao;
