import { StaffMember } from "../../@types/wizard";
import style from './StaffCard.module.scss';

const StaffCard = ({ wizard, room, subject }: StaffMember) => {

  const getRoomLabel = (room: StaffMember['room']) => {
    if (!room) {
      return 'Pas de salle attribuée';
    }
    let value = `${room.name}`;
    if (room.building) {
      value += ` - ${room.building}`;
      if (room.floor) {
        value += `.${room.floor}`;
      }
      if (room.number) {
        value += `.${room.number}`;
      }
    }
    return value;
  }

  return (
    <article className={style.staff_card}>
      <img src={wizard.image} alt="" />
      <h2>{wizard.firstname} {wizard.lastname}</h2>
      <label>Matière enseignée</label>
      <p>{subject.name}</p>
      <label>Salle de classe</label>
      <p>{getRoomLabel(room)}</p>
    </article>
  );
}

export default StaffCard;