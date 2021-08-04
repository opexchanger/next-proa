import Modal from '../../Modal';
import Form from '../../Form';
import ButtonSubmit from '../../Buttons/ButtonSubmit';
import handleFormSubmit from '../../../utils/viagem/handleFormSubmit';
import { useModal } from '../../../context/modalContext';

import styles from './buy-modal.module.scss';

export default function BuyModal() {
  const { travelPageModal, setTravelPageModal } = useModal();

  return (
    <Modal title="Estamos felizes pelo seu interesse!" showModal={travelPageModal} setShowModal={setTravelPageModal}>
      <p className={styles.modalInstructions}>Preencha os dados abaixo para entrarmos em contato</p>
      <Form formConfig={{ handleSubmit: handleFormSubmit }}>
        <Form.Input inputConfig={{ name: 'name', type: 'text', placeholder: 'Primeiro Nome' }} half />
        <Form.Input inputConfig={{ name: 'surname', type: 'text', placeholder: 'Sobrenome' }} half />
        <Form.Input inputConfig={{ name: 'email', type: 'email', placeholder: 'E-mail' }} />
        <Form.Select selectConfig={{ name: 'subject' }} label='Qual o assunto principal?'>
          <Form.SelectOption optionConfig={{ value: 'estimate', text: 'Orçamento' }} />
          <Form.SelectOption optionConfig={{ value: 'informations', text: 'Informações' }} />
          <Form.SelectOption optionConfig={{ value: 'question', text: 'Tenho uma pergunta' }} />
        </Form.Select>
        <Form.Select selectConfig={{ name: 'people' }} label='Quantas pessoas vão na viagem?'>
          <Form.SelectOption optionConfig={{ value: '1', text: '1' }} />
          <Form.SelectOption optionConfig={{ value: '2', text: '2' }} />
          <Form.SelectOption optionConfig={{ value: '3', text: '3' }} />
          <Form.SelectOption optionConfig={{ value: '3+', text: 'Mais de 3' }} />
        </Form.Select>
        <Form.TextArea textAreaConfig={{ name: 'message', placeholder: 'Sua Mensagem', cols: '20', rows: '8' }} />

        <ButtonSubmit type="email">
          Quero entrar em contato por email
        </ButtonSubmit>

        <ButtonSubmit type="whats">
          Quero entrar em contato pelo Whatsapp
        </ButtonSubmit>
      </Form>
    </Modal>
  )
}