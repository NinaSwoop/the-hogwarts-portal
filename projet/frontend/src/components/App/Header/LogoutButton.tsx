import { useNavigate } from "react-router-dom";
import style from "./LogoutButton.module.scss"

const LogoutForm: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {

    try {
      localStorage.removeItem('Final token');
      navigate(`/login`);
      return true;
    }
    catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }

    return false;
  };


  return (
    <div>
      <button className={style.logout_button} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutForm;