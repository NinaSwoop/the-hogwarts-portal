import { useState, useEffect } from 'react';
import { Class } from '../../../@types/class';
import ClassCard from '../../ui/ClassCard';
import style from './Classes.module.scss';


const Classes: React.FC = () => {
  const [data, setData] = useState<Class[] | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL+'/Classes');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className={style.classes_list}>
      {data && data.map((item, index) => (
        <ClassCard key={index} {...item} />
      ))}
    </main>
  );
}

export default Classes;