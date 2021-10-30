import Modal from '../../../components/Modal';
import BuyForm from '../BuyForm';
import { useModal } from '../../../context/modalContext';
import modalData from '../../../data/modal.preval'

import styles from './buy-modal.module.scss';

export default function BuyModal({ travel }) {
  const { travelPageModal, setTravelPageModal } = useModal();
  const { title, subtitle } = modalData;

  return (
    <Modal title={title} showModal={travelPageModal} setShowModal={setTravelPageModal}>
      <p className={styles.modalInstructions}>{subtitle}</p>
      <BuyForm travel={travel} data={modalData} />
    </Modal>
  )
}