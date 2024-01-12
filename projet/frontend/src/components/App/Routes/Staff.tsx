import { useState, useEffect } from 'react';
import { StaffMember } from '../../../@types/wizard';
import StaffCard from '../../ui/StaffCard';
import style from './Staff.module.scss';
import './Error500.scss';

const Staff: React.FC = () => {
  const [data, setData] = useState<StaffMember[] | null>(null);
  const [staffError, setStaffError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/staff');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
        setStaffError("Désolé une erreur est survenue")
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {!staffError ? (
        <main className={style.staff_list}>
          {data && data.map((item, index) => (
            <StaffCard key={index} {...item} />
          ))}
        </main>
      ) :
        (
          <main className={style.staff_list}>
            <p className="error-500">{staffError}</p>
          </main>
        )}
    </>
  );
}

export default Staff;