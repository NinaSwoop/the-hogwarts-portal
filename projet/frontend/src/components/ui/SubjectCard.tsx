import { useNavigate } from "react-router-dom";
import { Subject } from "../../@types/subject";
import style from './SubjectCard.module.scss';

const SubjectCard = ({ id, image, name, description }: Subject) => {

  const navigate = useNavigate();

  const handleClick = (id: number): void => {
    navigate(`/subjects/${id}`);
  };

  return (
    <div onClick={() => handleClick(id)}>
      <article className={style.subject_card}>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <label>Description</label>
        <p>{description}</p>
      </article>
    </div>

  );
}

export default SubjectCard;