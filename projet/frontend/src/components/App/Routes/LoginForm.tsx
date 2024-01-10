import React, { useState, useEffect, ChangeEvent } from 'react';
import poudlardLogo from "./../../../../public/poudlard.png";
import style from './LoginForm.module.scss'
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    // On redirige l'utilisateur lorsqu'il est authentifié
    useEffect(() => {
      if (isAuthenticated) {
        navigate('/wizard-role');
      }
    }, [isAuthenticated, navigate]);
    
    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
          // Appel d'API avec l'email et le mot de pass
          const response = await fetch(import.meta.env.VITE_API_URL+'/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });

          console.log(response)

          // On récupère le contenu de la réponse et on set le token
          const data = await response.json();
          console.log(data);
          setToken(data.token);
          console.log(data.token);
      
          // Si un token est généré on set isAuthenticated à true
          if (data.token) {
            setIsAuthenticated(true);
            console.log(isAuthenticated)

          // A faire -> récupérer l'id pour afficher rôles
            
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

    return (
        <main className={style.login_form}>
            <div className={style.container}>
                <img src={poudlardLogo} alt="Poudlard logo"></img>
                <h1>Connexion</h1>
                <form>
                <input type="text" value={email} onChange={handleEmailChange} placeholder='Identifiant' />
                <input type="password" value={password} onChange={handlePasswordChange} placeholder='Mot de passe' />
                <button onClick={handleLogin}>Soumettre</button>
                </form>
                {error && <p>{error}</p>}
            </div>
        </main>
    );
};

export default LoginForm;