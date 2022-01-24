import { createContext, useState, useContext } from 'react';

const SelectionContext = createContext();

export default function SelectionProvider({ children }) {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [selectedState, setSelectedState] = useState(0);
  const [selectedCity, setSelectedCity] = useState(0);

  return (
    <SelectionContext.Provider
      value={{
        selectedCountry,
        setSelectedCountry,
        selectedState,
        setSelectedState,
        selectedCity,
        setSelectedCity
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  return useContext(SelectionContext);
}
