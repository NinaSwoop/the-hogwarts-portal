import { useState, useEffect } from 'react';
import { Role } from '../../../@types/role';
import RoleCard from '../../ui/RoleCard';
import style from './Roles.module.scss';
import './Error500.scss';


const Roles: React.FC = () => {
  const [data, setData] = useState<Role[] | null>(null);
  const [rolesError, setRolesError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/Roles');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
        setRolesError("Désolé une erreur est survenue")
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {!rolesError ? (
        <main className={style.roles_list}>
          {data && data.map((item, index) => (
            <RoleCard key={index} {...item} />
          ))}
        </main>
      ) :
        (
          <p className="error-500">{rolesError}</p>
        )}
    </>
  );
}

export default Roles;