import { Wizard } from "../../../@types/wizard";
import Modal from "../../ui/Modal";
import { useNavigate } from "react-router-dom";

interface WizardModalProps {
    wizard: Wizard;
    onClose: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

function WizardModal ({ wizard, onClose }: WizardModalProps) {

    const navigate = useNavigate();
    
    const handleClick = (id: number): void => {
        navigate(`/wizard/${id}`);
    };

    return (
        <Modal onClose={onClose}>
            <>
                <h2>{wizard.firstname} {wizard.lastname}</h2>
                <p>{wizard.lastname}</p>
                <p>{wizard.firstname}</p>
                <p>{wizard.birthdate}</p>
                <p>{wizard.email}</p>
                <p>{wizard.image}</p>
                <button onClick={() => handleClick(wizard.id)}>Modifier infos</button>
            </>
        </Modal>
    );
}


export default WizardModal;
