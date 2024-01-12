import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Role } from "../../../@types/role";
import style from './RoleDetails.module.scss';

const RoleDetails = () => {
    const { id } = useParams();
    const [role, setRole] = useState<Role>();

    useEffect(() => {
        const fetchSubject = async () => {
            try {
              const response = await fetch(`${import.meta.env.VITE_API_URL}/roles/${id}`);
              const role = await response.json();
              setRole(role);
            } catch (error) {
              console.error(error);
            }
          }
      
          fetchSubject();
    }, [id]);

    return (
        <>
            <div className={style.role_details}>
              <h1>{role?.name}</h1>
              <label>Staff : {role?.is_staff ? 'Oui' : 'Non'}</label>
            </div>
        </>
    );
};

export default RoleDetails;