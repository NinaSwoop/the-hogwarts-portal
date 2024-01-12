import { useState, useEffect } from 'react';
import { House } from '../../../@types/house';
import HouseCard from '../../ui/HouseCard';
import style from './Houses.module.scss';


const Houses: React.FC = () => {
  const [data, setData] = useState<House[] | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL+'/Houses');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className={style.houses_list}>
      {data && data.map((item, index) => (
        <HouseCard key={index} {...item} />
      ))}
    </main>
  );
}

export default Houses;