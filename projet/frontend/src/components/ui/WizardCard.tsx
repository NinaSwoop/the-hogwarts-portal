import { Wizard } from "../../@types/wizard";
import style from './WizardCard.module.scss';
import { useState } from "react";
import WizardModal from "../App/Routes/WizardModal";
import { createPortal } from "react-dom";


const WizardCard = ({ id, image, firstname, lastname, email, birthdate, created_at, updated_at }: Wizard) => {

  const [showModal, setShowModal] = useState(false);

  const handleClick = (id: number): void => {
    setShowModal(true);
  }

  const closeModal = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    setShowModal(false);
  };

  return (
    <div onClick={() => handleClick(id)}>
      <article className={style.wizard_card}>
        <img src={image} alt="" />
        <h2>{firstname} {lastname}</h2>

        {showModal && createPortal(
          <WizardModal wizard={{ id, image, firstname, lastname, email, birthdate, created_at, updated_at }} onClose={closeModal} />,
          document.body
        )}
      </article>
    </div>
  );
}

export default WizardCard;
