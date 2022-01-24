import countries from '../data/countries.preval';
import { useSelection } from '../context/selectionContext';

export default function getSelectRegion() {
  const { setSelectedRegion } = useSelection();

  return function bindToRegion(regionId) {
    const selection = regionId ? countries.find((r) => r.id === regionId) : regionId;

    return function () {
      setSelectedRegion(selection);
    }
  }
}