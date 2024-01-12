import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Room } from "../../../@types/room";
import style from './RoomDetails.module.scss';

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState<Room>();

    useEffect(() => {
        const fetchSubject = async () => {
            try {
              const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`);
              const room = await response.json();
              setRoom(room);
            } catch (error) {
              console.error(error);
            }
          }
      
          fetchSubject();
    }, [id]);

    return (
        <>
            <div className={style.room_details}>
              <img src={room?.image} alt="" />
              <h1>{room?.name}</h1>
              <label>Capacity</label>
              <p>{room?.capacity}</p>
              <label>Building</label>
              <p>{room?.building}</p>
              <label>Floor</label>
              <p>{room?.floor}</p>
              <label>Number</label>
              <p>{room?.number}</p>
            </div>
        </>
    );
};

export default RoomDetails;