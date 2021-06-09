import { createContext, useState, useContext } from 'react';

import regions from '../data/regions.preval';

// cria o default
export const allRegions = {
  id: 0,
  name: 'Todas',
  travelsCount: regions.reduce((sum, current) => sum + current.travelsCount, 0),
};

const SelectionContext = createContext();

export default function SelectionProvider({ children }) {
  const [selectedRegion, setSelectedRegion] = useState(allRegions);
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
