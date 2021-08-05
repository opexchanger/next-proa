import { motion } from "framer-motion";

import style from './full-loader.module.scss';

export default function FullLoader() {
  return (
    <motion.div className={style.wrapper}>
      <motion.img src="/img/logo-proa.webp" width="200px"
        initial={{ scale: 0.3 }}
        animate={{ scale: [0.6, 1.0] }}
        transition={{ repeat: Infinity, repeatType: "reverse", stiffness: 100 }}
      />
    </motion.div>
  );
}
