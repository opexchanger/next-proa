import { Button } from "../../../components/Buttons";
import { useModal } from "../../../context/modalContext";

export default function CTAButton({ children }) {
  const { setTravelPageModal } = useModal()
  return (
    <Button type='cta' onClick={() => setTravelPageModal(true)}>
      {children}
    </Button>
  )
}