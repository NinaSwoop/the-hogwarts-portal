import './NavBar.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink } from '../../../@types/navlink';


const NavBar = () => {
  const [navLinks, setNavLinks] = useState<NavLink[] | null>(null);
  const location = useLocation();

  useEffect(() => {
    const fetchNavLinks = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/nav-links');
        const data = await response.json();
        setNavLinks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNavLinks();
  }, []);


  return (
    <nav>
      <ul>
        {navLinks && navLinks.map((navLink) => (
          <li key={navLink.url} className={navLink.url === location.pathname ? 'active' : ''}>
            <Link to={navLink.url}>{navLink.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;