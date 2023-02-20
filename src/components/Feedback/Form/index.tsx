import { ButtonForm } from "../ButtonForm";
import { FormContainer, CloseButton } from "./styles";
import { X } from "phosphor-react";

export function Form() {
  return (
    <FormContainer>
      <header>
        <strong>Deixe seu feedback</strong>
        <CloseButton>
          <X size={15} weight="bold" />
        </CloseButton>
      </header>
      <input type="email" placeholder="Digite o seu email" />
      <textarea placeholder="Enviar alguma pergunta"></textarea>
      <ButtonForm>Enviar Feedback</ButtonForm>
    </FormContainer>
  );
}
