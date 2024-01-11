import './NavBar.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink } from '../../../@types/navlink';


const NavBar = () => {
  const [navLinks, setNavLinks] = useState<NavLink[] | null>(null);
  const location = useLocation();
  // on récupère le token et le isStaff du local storage pour le passer à la requête mais pas mis à jour
  const finalToken = localStorage.getItem("Final token");
  const isStaff = localStorage.getItem("IsStaff");
  console.log(isStaff)
  useEffect(() => {
    
    const fetchNavLinks = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/nav-links', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${finalToken}`,
            'Content-Type': 'application/json',
          }
        });
        const data = await response.json();
        console.log(response)
        setNavLinks(data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchNavLinks();
  }, [finalToken, isStaff]);


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