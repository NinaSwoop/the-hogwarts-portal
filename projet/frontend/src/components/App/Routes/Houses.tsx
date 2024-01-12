import { useState, useEffect } from 'react';
import { House } from '../../../@types/house';
import HouseCard from '../../ui/HouseCard';
import style from './Houses.module.scss';
import './Error500.scss';


const Houses: React.FC = () => {
  const [data, setData] = useState<House[] | null>(null);
  const [housesError, setHousesError] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL+'/Houses');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
        setHousesError("Désolé une erreur est survenue")
      }
    }

    fetchData();
  }, []);

  return (
    <>
    {!housesError ? (
    <main className={style.houses_list}>
      {data && data.map((item, index) => (
        <HouseCard key={index} {...item} />
      ))}
    </main>
    ) :
    (
      <main className={style.houses_list}>
          <p className="error-500">{housesError}</p>
      </main>
    )}
    </>
  );
}

export default Houses;