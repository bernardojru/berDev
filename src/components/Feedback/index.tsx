import { Overlay, FeedbackContainer, CloseButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

export function Feedback() {
  return (
    <Dialog.Portal>
      <Overlay />
      <FeedbackContainer>
        <header>
          <strong>Deixe seu feedback</strong>
          <CloseButton>
            <X size={15} weight="bold" />
          </CloseButton>
        </header>
        <form>
          <input type="email" placeholder="Digite o seu email" />
          <textarea placeholder="Enviar alguma pergunta"></textarea>
          <button type="submit">Enviar Feedback</button>
        </form>
      </FeedbackContainer>
    </Dialog.Portal>
  );
}
