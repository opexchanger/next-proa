import { createContext, useState, useContext } from 'react';

const SelectionContext = createContext();

export default function SelectionProvider({ children }) {
  const [selectedRegion, setSelectedRegion] = useState(0);
  const [selectedSubRegion, setSelectedSubRegion] = useState(0);

  return (
    <SelectionContext.Provider
      value={{
        selectedRegion,
        setSelectedRegion,
        selectedSubRegion,
        setSelectedSubRegion,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  return useContext(SelectionContext);
}
