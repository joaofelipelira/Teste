const AnimalList = () => {
  const animals = [
    { id: 1, nome: 'Rex', tipo: 'Cachorro', status: 'Vacinado' },
    { id: 2, nome: 'Mia', tipo: 'Gato', status: 'Em tratamento' },
  ];

  return (
    <div>
      <h2>Lista de Animais</h2>
      {animals.map(animal => (
        <div key={animal.id}>
          <h3>{animal.nome}</h3>
          <p>Tipo: {animal.tipo}</p>
          <p>Status: {animal.status}</p>
        </div>
      ))}
    </div>
  );
};

export default AnimalList;
