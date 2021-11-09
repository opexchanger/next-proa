import Modal from "../../../components/Modal";
import { useModal } from '../../../context/modalContext';
import BuyForm from '../BuyForm';
import modalData from '../../../data/modal.preval';

import styles from './buy-modal.module.scss';

export default function BuyModal() {
  const { homePageModal, setHomePageModal } = useModal();
  const { title, subtitle } = modalData;

  return (
    <Modal title={title} showModal={homePageModal} setShowModal={setHomePageModal}>
      <p className={styles.modalInstructions}>{subtitle}</p>
      <BuyForm data={modalData} />
    </Modal>
  )
}