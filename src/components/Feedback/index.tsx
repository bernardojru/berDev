import { Overlay, FeedbackContainer, CloseButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Form } from "./Form";
import { SucessForm } from "./SucessForm";

export function Feedback() {
  const isSubmit = false;
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
        {isSubmit ? <Form /> : <SucessForm />}
      </FeedbackContainer>
    </Dialog.Portal>
  );
}
