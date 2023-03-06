import { CheckCircle } from "phosphor-react";
import { SuccessFormContainer } from "./styles";

export function SuccessForm() {
  return (
    <SuccessFormContainer>
      <CheckCircle size={100} weight="regular" color="#6866FB" />
      <p>Feedback enviado!</p>
    </SuccessFormContainer>
  );
}
