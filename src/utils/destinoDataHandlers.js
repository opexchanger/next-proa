import allTravels from '../data/travels.preval';
import allCategories from '../data/categories.preval';
import allCountries from '../data/countries.preval';
import { getStatesInCountry, getCitiesInCountry } from '../sanity/fetch';

export async function handleCustomRegion(customRegion) {
  const { categoryId, filterBy, filterCondition, showEmpty, countrySelection, stateSelection, citySelection, countryReference } = customRegion;

  const currentCategory = allCategories.find((category) => category.id === categoryId);
  const travels = getTravelsInThisCategory(currentCategory);

  switch (filterBy) {
    case 'country':
      const countryProps = handleCountryFilter(currentCategory, travels, filterCondition, showEmpty, countrySelection);
      return countryProps;
    case 'state':
      const stateProps = await handleStateFilter(currentCategory, travels, filterCondition, showEmpty, stateSelection, countryReference);
      return stateProps;
    case 'city':
      const cityProps = await handleCityFilter(currentCategory, travels, filterCondition, showEmpty, citySelection, countryReference);
      return cityProps;
  }
}

export function handleCategory(category) {
  const travels = getTravelsInThisCategory(category);

  const { countries, states, cities } = getAllLocationsFromTravels(travels);

  return {
    category,
    travels,
    countries: addOptionToSelectAll(countries, travels.length),
    states,
    cities
  }
}

const getTravelsInThisCategory = (category) => allTravels.filter((travel) => travel.categorySlug === category.slug);

function addOptionToSelectAll(countriesArray, travelsCount) {
  if (countriesArray.length > 1) {
    countriesArray.unshift({
      id: 0,
      title: 'Todos',
      travelsCount
    });
  }
  return countriesArray;
}

function getFilteredLocations(allLocations, locationSelection, filterCondition) {
  let customLocations = [];

  switch (filterCondition) {
    case 'all':
      customLocations = allLocations.filter((location) => locationSelection.includes(location.id))
      break;
    case 'allExcept':
      customLocations = allLocations.filter((location) => !locationSelection.includes(location.id))
      break;
  }

  return customLocations;
}

function filterTravelsToLocation(travels, selectedLocations, { locationType }) {
  let allTravelsInSelectedLocations = [];
  const filter = `${locationType}Id`;

  selectedLocations.forEach((location) => {
    const travelsInThisLocation = travels.filter((travel) => travel[filter] === location.id);
    location.travelsCount = travelsInThisLocation.length;
    allTravelsInSelectedLocations = allTravelsInSelectedLocations.concat(travelsInThisLocation);
  });

  return allTravelsInSelectedLocations;
}

function removeLocationsWithoutTravelCount(locations) {
  return locations.filter((location) => location.travelsCount > 0);
}

function getAllLocationsFromTravels(travels) {
  const allLocations = {
    countries: [],
    states: [],
    cities: [],
  }

  const locationAlreadyInserted = (locationId, locationType) => allLocations[locationType].find((location) => location.id === locationId);

  travels.forEach(travel => {
    travel.countryId && handleIncrement(travel.countryId, travel.countryName, 'countries');
    travel.stateId && handleIncrement(travel.stateId, travel.stateName, 'states', { countryId: travel.countryId });
    travel.cityId && handleIncrement(travel.cityId, travel.cityName, 'cities', { countryId: travel.countryId, stateId: travel.stateId });
  });

  function handleIncrement(id, title, locationType, regionsReference) {
    const location = locationAlreadyInserted(id, locationType);
    if (location) {
      location.travelsCount++;
    } else {
      allLocations[locationType].push({
        id,
        title,
        travelsCount: 1,
        ...regionsReference
      })
    }
  }

  return allLocations;
}

function handleCountryFilter(currentCategory, travels, filterCondition, showEmpty, countrySelection) {
  let customFilteredCountries = getFilteredLocations(allCountries, countrySelection, filterCondition);
  let travelsOnFilteredCountries = filterTravelsToLocation(travels, customFilteredCountries, { locationType: 'country' });

  if (!showEmpty) customFilteredCountries = removeLocationsWithoutTravelCount(customFilteredCountries);

  const { states, cities } = getAllLocationsFromTravels(travelsOnFilteredCountries);

  return {
    category: currentCategory,
    travels: travelsOnFilteredCountries,
    countries: addOptionToSelectAll(customFilteredCountries, travelsOnFilteredCountries.length),
    states,
    cities
  }
}

async function handleStateFilter(currentCategory, travels, filterCondition, showEmpty, stateSelection, countryReference) {
  const states = await getStatesInCountry(countryReference._ref);
  let customFilteredStates = getFilteredLocations(states, stateSelection, filterCondition);
  let travelsOnFilteredStates = filterTravelsToLocation(travels, customFilteredStates, { locationType: 'state' });

  if (!showEmpty) customFilteredStates = removeLocationsWithoutTravelCount(customFilteredStates);

  const { countries, cities } = getAllLocationsFromTravels(travelsOnFilteredStates);

  return {
    category: currentCategory,
    travels: travelsOnFilteredStates,
    countries,
    states: customFilteredStates,
    cities
  }
}

async function handleCityFilter(currentCategory, travels, filterCondition, showEmpty, citySelection, countryReference) {
  const cities = await getCitiesInCountry(countryReference._ref);
  let customFilteredCities = getFilteredLocations(cities, citySelection, filterCondition);
  let travelsOnFilteredCities = filterTravelsToLocation(travels, customFilteredCities, { locationType: 'city' });

  if (!showEmpty) customFilteredCities = removeLocationsWithoutTravelCount(customFilteredCities);

  const { countries, states } = getAllLocationsFromTravels(travelsOnFilteredCities);

  return {
    category: currentCategory,
    travels: travelsOnFilteredCities,
    countries,
    states,
    cities: customFilteredCities
  }
}