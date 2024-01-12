import { FormEvent, useState } from "react";
import { Wizard} from "../../../@types/wizard";
import Modal from "../../ui/Modal";
import { useNavigate } from "react-router-dom";
import style from './WizardModal.module.scss';

interface WizardFormProps {
    wizard: Wizard;
    onClose: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

function WizardModal ({ wizard, onClose }: WizardFormProps) {
    const [id, setId] = useState(wizard.id);
    const [lastname, setLastname] = useState(wizard.lastname);
    const [firstname, setFirstname] = useState(wizard.firstname);
    const [birthdate, setBirthdate] = useState(wizard.birthdate);
    const [email, setEmail] = useState(wizard.email);
    const [image, setImage] = useState(wizard.image);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const updateWizardInfo = async () => {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/wizards/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                lastname,
                firstname,
                birthdate,
                email,
                image
            })
        });
    
        if ( !response.ok ) {
            throw new Error("Erreur lors de la modification des informations de ce wizard.");
        }

        return await response.json();

    };

    const handleUpdateSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
          const updateInfo = await updateWizardInfo();

          navigate('/wizards');
    
          updateInfo.data;
          setFirstname(firstname);
          setLastname(lastname);
          setBirthdate(birthdate);
          setEmail(email);
          setImage(image);       
        } 
        catch (error) {
          console.log(error);
          setError("Erreur lors de la modification des informations de ce wizard.");
        }
    };

    const deleteWizardInfo = async (id: number) => {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/wizards/${id}`, {
            method: 'DELETE'
        });
    
        if ( !response.ok ) {
            throw new Error("Erreur lors de la suppresion de ce wizard.");
        }

        return null;
    };

    const handleDeleteSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        try {
          deleteWizardInfo(id);

          navigate('/wizards');
        
        } 
        catch (error) {
          console.log(error);
          setError("Erreur lors de la suppresion de ce wizard.");
        }
    };


    return (
        <Modal onClose={onClose}>
            <>
            <h2>{wizard.firstname} {wizard.lastname}</h2>
                <form className={style.form__wizard__modal} onSubmit={handleUpdateSubmit}>
                <input type="text" value={lastname} onChange={e => setLastname(e.target.value)} />
                <input type="text" value={firstname} onChange={e => setFirstname(e.target.value)} />
                <input type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="text" value={image} onChange={e => setImage(e.target.value)} />
                <div className={style.buttons__container}>
                    <input className={style.input__wizard__modal} type="submit" value="Sauvegarder"/>
                    <button className={style.delete__button} onClick={handleDeleteSubmit}>Supprimer</button>
                </div>
                </form>
            </>
        </Modal>
    );
}


export default WizardModal;
