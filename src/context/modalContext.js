import { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [travelPageModal, setTravelPageModal] = useState(false);
  const [homePageModal, setHomePageModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        travelPageModal,
        setTravelPageModal,
        homePageModal,
        setHomePageModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
