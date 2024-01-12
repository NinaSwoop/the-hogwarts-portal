import { useNavigate } from "react-router";
import { House } from "../../@types/house";
import style from './HouseCard.module.scss';

const HouseCard = ({ id, name, image, building, floor }: House) => {

    const navigate = useNavigate();

    const handleClick = (id: number): void => {
        navigate(`/houses/${id}`);
    };


    return (
        <div onClick={() => handleClick(id)}>
            <article className={style.house_card}>
                <img src={image} alt="House image" />
                <h2>{name}</h2>
                <label>Location</label>
                <p>{building} {floor}</p>
            </article>
        </div>
    );
}

export default HouseCard;


