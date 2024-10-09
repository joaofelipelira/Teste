import { useState, useEffect } from 'react';

const AnimalList = () => {
  const [animais, setAnimais] = useState([]); // estado para armazenar a lista de animais

  const addAnimal = (animal) => {
    setAnimais([...animais, animal]);
  };

  useEffect(() => {
    // adicione o código para buscar os dados no banco de dados ou em um estado global
    const dados = [
      { id: 1, nome: 'Rex', tipo: 'Cachorro', status: 'Vacinado' },
      { id: 2, nome: 'Mia', tipo: 'Gato', status: 'Em tratamento' },
      // ...
    ];
    setAnimais(dados);
  }, []);

  return (
    <div className="card">
      <h2>Lista de Animais</h2>
      <ul>
        {animais.map((animal) => (
          <li key={animal.id}>
            <h3>{animal.nome}</h3>
            <p>Tipo: {animal.tipo}</p>
            <p>Status: {animal.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;