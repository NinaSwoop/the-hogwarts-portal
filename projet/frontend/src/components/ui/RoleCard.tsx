import { useNavigate } from "react-router";
import { Role } from "../../@types/role";
import style from './RoleCard.module.scss';

const RoleCard = ({ id, name, is_staff}: Role) => {

    const navigate = useNavigate();

    const handleClick = (id: number): void => {
        navigate(`/roles/${id}`);
    };


    return (
        <div onClick={() => handleClick(id)}>
            <article className={style.role_card}>
                <h2>{name}</h2>
                <label>Staff : {is_staff ? 'Oui' : 'Non'}</label>
            </article>
        </div>
    );
}

export default RoleCard;


