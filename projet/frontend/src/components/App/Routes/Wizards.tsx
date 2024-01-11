import { useEffect, useState } from "react";
import { Wizard } from "../../../@types/wizard";
import WizardCard from "../../ui/WizardCard";
import style from './Wizards.module.scss';

const Wizards: React.FC = () => {
    const [data, setData] = useState<Wizard[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const finalToken = localStorage.getItem("Final token");
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + '/wizards', {
                    method: 'GET',
                    headers: {
                      'Authorization': `Bearer ${finalToken}`,
                      'Content-Type': 'application/json',
                    }
                  });
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return (
        <main className={style.wizards_list}>
            {data && data.map((item) => (
                <WizardCard key={item.id} {...item} />
            ))}
        </main>
    );
}

export default Wizards;