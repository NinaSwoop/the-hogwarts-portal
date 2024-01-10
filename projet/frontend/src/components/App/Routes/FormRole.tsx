import poudlardLogo from "./../../../../public/poudlard.png";
import style from './FormRole.module.scss';


const LoginForm: React.FC = () => {


    return (
        <main className={style.form_role}>
            <div className={style.container}>
                <img src={poudlardLogo} alt="Poudlard logo"></img>
                <h1>Bienvenue</h1>
                <div>
                    <p>CONTINUER EN TANT QUE : </p>
                    <form>
                        <button>Soumettre</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default LoginForm;