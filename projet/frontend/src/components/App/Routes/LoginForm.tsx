import React, { useState, ChangeEvent } from 'react';
import poudlardLogo from "./../../../../public/poudlard.png";
import style from './LoginForm.module.scss';
import { Role } from '../../../@types/role';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [firstname, setFirstname] = useState<string>('');
  const [idWizard, setIdWizard] = useState<number | null>(null);
  const [roleData, setRoleData] = useState<Role[]>([]);
  const [roleId, setRoleId] = useState<number| null>(null);
  const navigate = useNavigate();
  

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Appel d'API avec l'email et le mot de pass
      const response = await fetch(import.meta.env.VITE_API_URL + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // On récupère le contenu de la réponse et on set le token
      const data = await response.json();

      setToken(data.token);


      // Si un token est généré on set isAuthenticated à true
      if (data.token) {
        setIsAuthenticated(true);
        setFirstname(data.wizard.firstname);
        setIdWizard(data.wizard.id);
        //const tokenJson = JSON.stringify({ data.token });

        const response = await fetch(import.meta.env.VITE_API_URL + `/wizard-roles`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${data.token}`,
            'Content-Type': 'application/json',
          }
        });
        // réponse -> nom des rôles 
        const dataRole = await response.json();
        setRoleData(dataRole);

      } else {
        console.error('Login failed:', response.statusText);
        setError("Oups, l'identifiant ou le mot de pass n'est pas bon");
      }
    } catch (error) {
      console.error('Login failed:', error);
    }

  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLoginRole = async (id: number) => {
    const response = await fetch(import.meta.env.VITE_API_URL + '/login-role', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        id: id,
       }),
       
    })
    const data = await response.json();
    setRoleId(data.role.id);

    if (data && data.token) {
      localStorage.setItem('Final token', data.token);
      localStorage.setItem('IsStaff', data.isStaff);
      setToken(data.token);
      navigate('/');
  }
    
    
  };

  return (
    <main className={style.login_form}>
      < div className={style.container}>
        <img src={poudlardLogo} alt="Poudlard logo"></img>

        {!isAuthenticated ? (
          <div>
            <h1>Connexion</h1>
            <form>
              <input type="text" value={email} onChange={handleEmailChange} placeholder='Identifiant' />
              <input type="password" value={password} onChange={handlePasswordChange} placeholder='Mot de passe' />
              <button className={style.button_login} onClick={handleLogin}>Soumettre</button>
            </form>
            {error && <p className={style.error}>{error}</p>}
          </div>
        ) : (
          <div>
            <h1>Bienvenue {firstname}</h1>
            <div>
              <p>CONTINUER EN TANT QUE : </p>
              {roleData.length > 0 && roleData.map((role) => {
                return (
                  <button className={style.button_role} onClick={() => handleLoginRole(role.id)}>{role.name}</button>
                )
              })}
              <button className={style.button_role} >Soumettre</button>
            </div>
          </div>
        )}

      </div>
    </main >
  );
};

export default LoginForm;