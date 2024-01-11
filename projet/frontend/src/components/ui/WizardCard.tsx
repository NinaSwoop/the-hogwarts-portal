import { Wizard } from "../../@types/wizard";
import style from './WizardCard.module.scss';

const WizardCard = ({ image, firstname, lastname }: Wizard) => {
  
  return (
    <article className={style.wizard_card}>
        <img src={image} alt="" />
        <h2>{firstname} {lastname}</h2>
    </article>
  );
}

export default WizardCard;