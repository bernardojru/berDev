import { CheckCircle } from "phosphor-react";
import { SuccessFormContainer, CloseButton } from "./styles";

export function SuccessForm() {
  return (
    <SuccessFormContainer>
      <CheckCircle size={100} weight="regular" color="#6866FB" />
      <CloseButton>Pedido enviado!</CloseButton>
    </SuccessFormContainer>
  );
}
