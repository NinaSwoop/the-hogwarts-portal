import { useNavigate } from "react-router";
import { Class } from "../../@types/class";
import style from './ClassCard.module.scss';

const ClassCard = ({ id, name, image, level }: Class) => {

    const navigate = useNavigate();

    const handleClick = (id: number): void => {
        navigate(`/classes/${id}`);
    };


    return (
        <div onClick={() => handleClick(id)}>
            <article className={style.class_card}>
                <img src={image} alt="Class image" />
                <h2>{name}</h2>
                <label>Level</label>
                <p>{level}</p>
            </article>
        </div>
    );
}

export default ClassCard;


