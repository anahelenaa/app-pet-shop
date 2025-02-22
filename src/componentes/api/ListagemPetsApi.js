import React, { useEffect, useState } from 'react';
import Api from '../../Api';

const ListagemPetsApi = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Api.get("/pet/listar")
      .then((response) => {
        console.log(response)
        setPets(response.data)
      })
      .catch((err) => {
        console.error("Nenhum cliente encontrado." + err);
        setError("Ocorreu um erro ao buscar os pets. Tente novamente mais tarde.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return [];
  }

  if (error) {
    return [];
  }

  return pets;
};

export default ListagemPetsApi;