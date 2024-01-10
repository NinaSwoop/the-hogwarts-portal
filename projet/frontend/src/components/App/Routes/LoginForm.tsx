import React, { useState, useEffect, ChangeEvent } from 'react';
import poudlardLogo from "./../../../../public/poudlard.png";
import style from './LoginForm.module.scss'
import { useNavigate } from 'react-router-dom';



// interface LoginFormProps {
//   onLogin: (token: string) => void;
// }

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const navigate = useNavigate();

    // const handleWizardRole = async () => {
    //     try {
    //       const role = await fetch(import.meta.env.VITE_API_URL+'/wizard-roles');
    //     } catch (error) {
    //       console.error('error');
    //     }
    // };

    const navigateIfAuthenticated = (authenticated: boolean) => {
      if (authenticated) {
        navigate('/wizard-role');
      }
    };
  
    useEffect(() => {
      navigateIfAuthenticated(isAuthenticated);
    }, [isAuthenticated]);
    


    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
       
        try {
           
          const response = await fetch(import.meta.env.VITE_API_URL+'/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });

          console.log(response)

          console.log('hello');
          const data = await response.json();
          console.log(data);
          setToken(data.token);
          setIsAuthenticated(true);
          console.log(isAuthenticated)
         
          // Si connexion ok
          if (response.ok) {
            console.log(response)
            
            // setIsAuthenticated(true);

            

            const tokenN = data.token;
            
            console.log(tokenN);


        
            // Récupérer le token pour afficher rôles
            // const { token } = await response.json();

            
          } else {
            console.error('Login failed:', response.statusText);
          }
        } catch (error) {
          console.error('Login failed:', error);
        }

        if (isAuthenticated === true)
        {
            navigate('/wizard-role');
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
            </div>
        </main>
    );
};

export default LoginForm;