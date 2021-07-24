import regions from '../../../data/regions.preval';
import { useSelection } from '../../../context/selectionContext';

export default function useSelectRegion() {
  const { setSelectedRegion } = useSelection();

  return function (regionId, callback) {
    const selection = regionId ? regions.find((r) => r.id === regionId) : regionId;
    return function () {
      setSelectedRegion(selection);
      callback && callback();
    }
  }
}