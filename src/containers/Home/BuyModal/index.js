import Modal from "../../../components/Modal";
import { useModal } from '../../../context/modalContext';

export default function BuyModal() {
  const { homePageModal, setHomePageModal } = useModal();

  return (
    <Modal title="Esta é a página casa" showModal={homePageModal} setShowModal={setHomePageModal}>
      <p>ueeeeepapap</p>
      <button>pepepe</button>
    </Modal>
  )
}