import { useState, useEffect } from 'react';
import { Subject } from '../../../@types/subject';
import SubjectCard from '../../ui/SubjectCard';
import style from './Subjects.module.scss';


const Subjects: React.FC = () => {
  const [data, setData] = useState<Subject[] | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/subjects');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className={style.subjects_list}>
      {data && data.map((item) => (
        <SubjectCard key={item.id} {...item} />
      ))}
    </main>
  );
}

export default Subjects;