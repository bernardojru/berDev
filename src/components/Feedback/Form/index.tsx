import { ButtonForm } from "../ButtonForm";
import { FormContainer } from "./styles";

export function Form() {
  return (
    <FormContainer>
      <input type="email" placeholder="Digite o seu email" />
      <textarea placeholder="Enviar alguma pergunta"></textarea>
      <ButtonForm>Enviar Feedback</ButtonForm>
    </FormContainer>
  );
}
