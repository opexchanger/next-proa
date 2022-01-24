import { useSelection } from "../../context/selectionContext";

export default function useSelectionMethods() {
  const {
    selectedCountry,
    setSelectedCountry: setCountry,
    selectedState,
    setSelectedState: setState,
    selectedCity,
    setSelectedCity
  } = useSelection();

  function resetSubRegions() {
    setState(0);
    setSelectedCity(0);
  }

  const setSelectedCountry = (country) => {
    resetSubRegions();
    setCountry(country);
  };

  const setSelectedState = (state) => {
    setSelectedCity(0);
    setState(state);
  };

  const filterStates = (states) => {
    if (selectedCountry.id === 0) {
      return states;
    }
    return states.filter(
      (state) => state.countryId === selectedCountry.id
    );
  };

  const filterCities = (cities) => {
    if (selectedState.id === 0) {
      return cities;
    }
    return cities.filter(
      (city) => city.stateId === selectedState.id
    );
  };

  const filterTravels = (travels) => {
    if (selectedCountry.id === 0 && selectedState === 0 && selectedCity === 0) {
      return travels;
    }
    if (selectedCity !== 0) {
      return travels.filter(
        (travel) => travel.cityId === selectedCity.id
      );
    }
    if (selectedState !== 0) {
      return travels.filter(
        (travel) => travel.stateId === selectedState.id
      );
    }
    return travels.filter(
      (travel) => travel.countryId === selectedCountry.id
    );
  };

  return {
    resetSubRegions,
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    filterStates,
    selectedCity,
    setSelectedCity,
    filterCities,
    filterTravels
  }
}