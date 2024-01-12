import { useNavigate } from "react-router";
import { Room } from "../../@types/room";
import style from './RoomCard.module.scss';

const RoomCard = ({ id, name, image, building, floor, number, capacity }: Room) => {

    const navigate = useNavigate();

    const handleClick = (id: number): void => {
        navigate(`/rooms/${id}`);
    };


    return (
        <div onClick={() => handleClick(id)}>
            <article className={style.room_card}>
                <img src={image} alt="Room image" />
                <h2>{name}</h2>
                <label>Location</label>
                <p>{building} {floor} {number}</p>
                <label>Capacity</label>
                <h2>{capacity}</h2>
            </article>
        </div>
    );
}

export default RoomCard;


