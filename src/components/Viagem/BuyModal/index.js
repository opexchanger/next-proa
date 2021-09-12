import Modal from '../../Modal';
import BuyForm from '../BuyForm';
import { useModal } from '../../../context/modalContext';

import styles from './buy-modal.module.scss';

export default function BuyModal({ travel }) {
  const { travelPageModal, setTravelPageModal } = useModal();

  return (
    <Modal title="Estamos felizes pelo seu interesse!" showModal={travelPageModal} setShowModal={setTravelPageModal}>
      <p className={styles.modalInstructions}>Preencha os dados abaixo para entrarmos em contato</p>
      <BuyForm travel={travel} />
    </Modal>
  )
}