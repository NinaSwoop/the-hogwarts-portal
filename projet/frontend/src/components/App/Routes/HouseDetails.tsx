import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { House } from "../../../@types/house";
import style from './HouseDetails.module.scss';

const HouseDetails = () => {
    const { id } = useParams();
    const [house, setHouse] = useState<House>();

    useEffect(() => {
        const fetchSubject = async () => {
            try {
              const response = await fetch(`${import.meta.env.VITE_API_URL}/houses/${id}`);
              const house = await response.json();
              setHouse(house);
            } catch (error) {
              console.error(error);
            }
          }
      
          fetchSubject();
    }, [id]);

    return (
        <>
            <div className={style.house_details}>
              <img src={house?.image} alt="" />
              <h1>{house?.name}</h1>
              <label>Building</label>
              <p>{house?.building}</p>
              <label>Floor</label>
              <p>{house?.floor}</p>
            </div>
        </>
    );
};

export default HouseDetails;