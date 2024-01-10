import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="/poudlard.png" alt="Logo de Poudlard" />
      </Link>

      <h1>Poudlard's portal</h1>

      <Link to="/login">
        <img src="/locked.png" alt="" />
      </Link>
    </header>
  );
}

export default Header;
