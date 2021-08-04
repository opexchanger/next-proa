import regions from '../../../data/regions.preval';
import { useSelection } from '../../../context/selectionContext';

export default function getSelectRegion() {
  const { setSelectedRegion } = useSelection();

  return function bindToRegion(regionId) {
    const selection = regionId ? regions.find((r) => r.id === regionId) : regionId;

    return function () {
      setSelectedRegion(selection);
    }
  }
}