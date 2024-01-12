import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Subject } from "../../../@types/subject";
import style from './SubjectDetails.module.scss';
import './Error500.scss';

const SubjectDetails = () => {
  const { id } = useParams();
  const [subject, setSubject] = useState<Subject>();
  const [subjectErrorDetails, setSubjectErrorDetails] = useState('');

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/subjects/${id}`);
        const subject = await response.json();
        setSubject(subject);
      } catch (error) {
        console.error(error);
        setSubjectErrorDetails("Désolé une erreur est survenue")
      }
    }

    fetchSubject();
  }, [id]);

  return (
    <>
      {!subjectErrorDetails ? (
        <div className={style.subject__details}>
          <img src={subject?.image} alt="" />
          <h1>{subject?.name}</h1>
          <p>{subject?.description}</p>
        </div>
      ) :
        (
          <div className={style.subject__details}>
            <p className="error-500">{subjectErrorDetails}</p>
          </div>
        )}
    </>
  );
};

export default SubjectDetails;