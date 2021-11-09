import { ButtonCTA } from "../../../components/Buttons";
import { useModal } from "../../../context/modalContext";

import globalData from "../../../data/globalData.preval";

export default function CTAHome({ selfCenter }) {
  const { ctaButtonText } = globalData.pagesGeral;

  const { setHomePageModal } = useModal();
  return (
    <ButtonCTA onClick={() => setHomePageModal(true)} selfCenter={selfCenter}>
      {ctaButtonText}
    </ButtonCTA>
  )
}