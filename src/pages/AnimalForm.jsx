import { useState } from 'react';

const AnimalForm = () => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // adicione o código para salvar os dados no banco de dados ou em um estado global
    console.log('Dados cadastrados:', { nome, tipo, status });
  };

  return (
    <div className="card">
      <h2>Cadastrar Animal</h2>
      <form onSubmit={handleSubmit} className="form-cadastro">
        <div className="form-group">
          <label>Nome do Animal:</label>
          <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Tipo:</label>
          <input type="text" value={tipo} onChange={(event) => setTipo(event.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select value={status} onChange={(event) => setStatus(event.target.value)} className="form-control">
            <option value="">Selecione um status</option>
            <option value="Vacinado">Vacinado</option>
            <option value="Em tratamento">Em tratamento</option>
            <option value="Saudável">Saudável</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Salvar</button>
      </form>
    </div>
  );
};

export default AnimalForm;