import React, { Fragment, useState } from 'react';
import './dados-cadastro.css';
import CadastroClienteApi from '../../../../api/CadastroClienteApi';
import CadastroPetApi from '../../../../api/CadastroPetApi';

const DadosCadastro = ({ camposCadastro, modulo }) => {
  const [dadosCadastro, setDadosCadastro] = useState({});

  function cadastrar(formData) {
    const novosDados = {}; 

    camposCadastro.forEach((campo) => { 
      novosDados[campo.nomeAtributo] = formData.get(campo.nomeAtributo);
    });

    setDadosCadastro(novosDados); 
  }

  return (
    <Fragment>
      <form onSubmit={(e) => { 
        e.preventDefault(); 
        const formData = new FormData(e.target); 
        cadastrar(formData); 
      }}>
        {camposCadastro.map((campo, index) => (
          <div className={'conjunto-dados-cadastro dados-cadastro-' + campo.classe} key={index}>
            <p><b>{campo.nome}:</b></p>
            <input name={campo.nomeAtributo} />
          </div>
        ))}

        <button className={'botao-cadastro'} type="submit">Enviar</button>
      </form>
      {modulo === 'cliente' && dadosCadastro && (
        <CadastroClienteApi dadosCliente={dadosCadastro} />
      )}

      {modulo === 'pet' && dadosCadastro && (
        <CadastroPetApi dadosPet={dadosCadastro} />
      )}
    </Fragment>
  );
};

export default DadosCadastro;
