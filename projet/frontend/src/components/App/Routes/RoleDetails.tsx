import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Role } from "../../../@types/role";
import style from './RoleDetails.module.scss';
import './Error500.scss';

const RoleDetails = () => {
  const { id } = useParams();
  const [role, setRole] = useState<Role>();
  const [roleErrorDetails, setRoleErrorDetails] = useState('');

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/roles/${id}`);
        const role = await response.json();
        setRole(role);
      } catch (error) {
        console.error(error);
        setRoleErrorDetails("Désolé une erreur est survenue")
      }
    }

    fetchSubject();
  }, [id]);

  return (
    <>
      {!roleErrorDetails ? (
        <div className={style.role_details}>
          <h1>{role?.name}</h1>
          <label>Staff : {role?.is_staff ? 'Oui' : 'Non'}</label>
        </div>
      ) :
        (
          <div className={style.role_details}>
            <p className="error-500">{roleErrorDetails}</p>
          </div>
        )}
    </>
  );
};

export default RoleDetails;