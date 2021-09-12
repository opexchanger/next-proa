import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import { bgVariants, modalVariants } from './animationVariants';

import styles from './modal.module.scss';

export default function Modal({ title, showModal, setShowModal, children }) {

  useEffect(() => {
    showModal ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";
  });

  return (
    <AnimatePresence>
      {showModal &&
        <motion.div className={styles.bgWrapper}
          variants={bgVariants}
          initial="closed"
          animate="open"
          exit="closing"
          transition={{ damping: 500 }}
        >
          <motion.div className={styles.modal}
            variants={modalVariants}
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