import ButtonRegular from '../../../Buttons/ButtonRegular';
import styles from '../form.module.scss';

export default function getReturnMessage(status, messages, onClickHandler) {
  if (status === 'success') {
    return (
      <>
        <div className={styles.returnMessage}>
          <img src="/img/icon_message_success.png" alt="Ícone avião decolando" />
          <h3 className={styles.returnText}>
            {messages.success}
          </h3>
        </div>
        <ButtonRegular onClick={onClickHandler}>Cadastrar outro email?</ButtonRegular>
      </>
    )
  } else {
    return (
      <>
        <div className={`${styles.returnMessage} ${styles.returnMessage_error}`}>
          <img src="/img/icon_message_fail.png" alt="Ícone avião voltando" />
          <h3 className={styles.returnText}>
            {messages.fail}
          </h3>
        </div>
        <ButtonRegular onClick={onClickHandler}>Tentar novamente</ButtonRegular>
      </>
    )
  }
}