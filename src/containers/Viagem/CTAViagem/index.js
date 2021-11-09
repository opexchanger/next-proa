import { Button } from "../../../components/Buttons";
import { useModal } from "../../../context/modalContext";

export default function CTAButton({ children, selfCenter }) {
  const { setTravelPageModal } = useModal();
  return (
    <Button type='cta' onClick={() => setTravelPageModal(true)} selfCenter={selfCenter}>
      {children}
    </Button>
  )
}