import { useState, useEffect } from 'react';
import { Room } from '../../../@types/room';
import RoomCard from '../../ui/RoomCard';
import style from './Rooms.module.scss';


const Rooms: React.FC = () => {
  const [data, setData] = useState<Room[] | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL+'/rooms');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className={style.rooms_list}>
      {data && data.map((item, index) => (
        <RoomCard key={index} {...item} />
      ))}
    </main>
  );
}

export default Rooms;