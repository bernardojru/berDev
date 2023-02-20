import { Overlay, FeedbackContainer } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { Form } from "./Form";
import { SucessForm } from "./SucessForm";

export function Feedback() {
  const isSubmit = false;
  return (
    <Dialog.Portal>
      <Overlay />
      <FeedbackContainer>
        {isSubmit ? <Form /> : <SucessForm />}
      </FeedbackContainer>
    </Dialog.Portal>
  );
}
