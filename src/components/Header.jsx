import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list">Lista de Animais</Link></li>
        <li><Link to="/form">Cadastrar Animal</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
