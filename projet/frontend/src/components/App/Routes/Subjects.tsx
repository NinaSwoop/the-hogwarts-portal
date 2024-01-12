import { useState, useEffect } from 'react';
import { Subject } from '../../../@types/subject';
import SubjectCard from '../../ui/SubjectCard';
import style from './Subjects.module.scss';
import './Error500.scss';


const Subjects: React.FC = () => {
  const [data, setData] = useState<Subject[] | null>(null);
  const [subjectsError, setSubjectsError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/subjects');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
        setSubjectsError("Désolé une erreur est survenue")
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {!subjectsError ? (
        <main className={style.subjects_list}>
          {data && data.map((item) => (
            <SubjectCard key={item.id} {...item} />
          ))}
        </main>
      ) :
        (
          <main className={style.subjects_list}>
            <p className="error-500">{subjectsError}</p>
          </main>
        )}
    </>
  );
}

export default Subjects;