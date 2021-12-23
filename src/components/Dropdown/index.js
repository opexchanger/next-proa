
import { useEffect } from "react";

import styles from './dropdown.module.scss';

// TODO então, o useRef e State tao tudo tendo que vir do componente pai desse aqui, então ele nao ta realmente muito
// reaproveitável, pq a lógica pra chamar ele tem que ser repetida em todo mundo que for chamar...
export default function Dropdown({ open, setOpen, node, children }) {

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open]);

  return (
    <>
      {open && (
        <ul className={styles.dropdown}>
          {children}
        </ul>
      )}
    </>
  );
};
