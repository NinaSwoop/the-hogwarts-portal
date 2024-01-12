import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Class } from "../../../@types/class";
import style from './ClassDetails.module.scss';
import './Error500.scss';

const ClassDetails = () => {
  const { id } = useParams();
  const [levelClass, setLevelClass] = useState<Class>();
  const [classErrorDetails, setClassErrorDetails] = useState('');


  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/${id}`);
        const levelClass = await response.json();
        setLevelClass(levelClass);
      } catch (error) {
        console.error(error);
        setClassErrorDetails("Désolé une erreur est survenue")
      }
    }

    fetchSubject();
  }, [id]);

  return (
    <>
      {!classErrorDetails ? (
        <div className={style.class_details}>
          <img src={levelClass?.image} alt="" />
          <h1>{levelClass?.name}</h1>
          <label>Level</label>
          <p>{levelClass?.level}</p>
        </div>
      ) :
        (
          <div className={style.class_details}>
            <p className="error-500">{classErrorDetails}</p>
          </div>
        )}
    </>
  );
};

export default ClassDetails;