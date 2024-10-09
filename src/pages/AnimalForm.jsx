const AnimalForm = () => {
    return (
      <div>
        <h2>Cadastrar Animal</h2>
        <form>
          <label>Nome do Animal:</label>
          <input type="text" name="nome" />
          <br />
          <label>Tipo:</label>
          <input type="text" name="tipo" />
          <br />
          <button type="submit">Salvar</button>
        </form>
      </div>
    );
  }
  export default AnimalForm;
  