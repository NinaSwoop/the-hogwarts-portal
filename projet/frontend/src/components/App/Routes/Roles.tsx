import { useState, useEffect } from 'react';
import { Role } from '../../../@types/role';
import RoleCard from '../../ui/RoleCard';
import style from './Roles.module.scss';


const Roles: React.FC = () => {
  const [data, setData] = useState<Role[] | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL+'/Roles');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className={style.roles_list}>
      {data && data.map((item, index) => (
        <RoleCard key={index} {...item} />
      ))}
    </main>
  );
}

export default Roles;