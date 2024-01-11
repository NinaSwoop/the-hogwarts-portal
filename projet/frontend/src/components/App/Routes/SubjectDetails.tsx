import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Subject } from "../../../@types/subject";
import style from './SubjectDetails.module.scss';

const SubjectDetails = () => {
    const { id } = useParams();
    const [subject, setSubject] = useState<Subject>();

    useEffect(() => {
        const fetchSubject = async () => {
            try {
              const response = await fetch(`${import.meta.env.VITE_API_URL}/subjects/${id}`);
              const subject = await response.json();
              setSubject(subject);
            } catch (error) {
              console.error(error);
            }
          }
      
          fetchSubject();
    }, [id]);

    return (
        <>
            <div className={style.subject__details}>
              <img src={subject?.image} alt="" />
              <h1>{subject?.name}</h1>
              <p>{subject?.description}</p>
            </div>
        </>
    );
};

export default SubjectDetails;