import { Subject } from "../../@types/subject";
import style from './SubjectCard.module.scss';

const SubjectCard = ({ image, name, description }: Subject) => {
  
  return (
    <article className={style.subject_card}>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <label>Description</label>
      <p>{description}</p>
    </article>
  );
}

export default SubjectCard;