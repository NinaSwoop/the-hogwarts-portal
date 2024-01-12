import LogoutButton from './LogoutButton.tsx';
import './Header.scss';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="/poudlard.png" alt="Logo de Poudlard" />
      </Link>

      <h1>Poudlard's portal</h1>

      <div className='buttons_connexion'>
        <Link to="/login">
          <img src="/locked.png" alt="" />
        </Link>

        <LogoutButton />
      </div>
    </header>
  );
}

export default Header;
