import { motion, AnimatePresence } from 'framer-motion';

import styles from './modal.module.scss';

const modalVariants = {
  closed: { y: "-100%" },
  open: { y: "0" },
  goUp: { y: "-200%" }
}

export default function Modal({ title, showModal, setShowModal, children }) {
  return (
    <AnimatePresence>
      {showModal &&
        <motion.div className={styles.bgWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ damping: 500 }}
        >
          <motion.div className={styles.modal}
            variants={modalVariants}
            initial="closed"
            animate="open"
            exit="goUp"
          >
            <div className={styles.modal__header}>
              <button className={styles.modal__btn}
                onClick={() => setShowModal(false)}
              >X</button>
            </div>
            <div className={styles.modal__content}>
              <h2 className={styles.modal__title}>{title}</h2>
              {children}
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  );
}