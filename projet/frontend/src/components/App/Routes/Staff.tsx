import { useState, useEffect } from 'react';
import { StaffMember } from '../../../@types/wizard';
import StaffCard from '../../ui/StaffCard';
import style from './Staff.module.scss';

const Staff: React.FC = () => {
  const [data, setData] = useState<StaffMember[] | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/staff');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className={style.staff_list}>
      {data && data.map((item) => (
        <StaffCard key={item.wizard.id} {...item} />
      ))}
    </main>
  );
}

export default Staff;